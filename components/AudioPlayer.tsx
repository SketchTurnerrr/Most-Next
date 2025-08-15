'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Pause, Play, Volume1, VolumeX } from 'lucide-react';

type AudioPlayerProps = {
  src: string;
  preload?: 'none' | 'metadata' | 'auto';
  className?: string;
  duration: number;
};

const PLAYBACK_SPEEDS = ['1', '1.25', '1.5', '1.75', '2'];

export function AudioPlayer({
  src,
  preload = 'none',
  className,
  duration,
}: AudioPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [speed, setSpeed] = React.useState<string>('1');
  const [state_duration, setDuration] = React.useState<number>(duration || 0);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [isSeeking, setIsSeeking] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(1);
  const [muted, setMuted] = React.useState<boolean>(false);

  const progressRef = React.useRef<HTMLDivElement | null>(null);
  const volumeRef = React.useRef<HTMLDivElement | null>(null);

  console.log('duration :', duration);
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const onTime = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnd = () => setIsPlaying(false);
    const onVolume = () => {
      setVolume(audio.volume);
      setMuted(audio.muted || audio.volume === 0);
    };

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('volumechange', onVolume);

    // apply persisted volume/mute
    audio.volume = volume;
    audio.muted = muted;

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnd);
      audio.removeEventListener('volumechange', onVolume);
    };
  }, [isSeeking, volume, muted]);

  function formatTime(totalSeconds: number) {
    const s = Math.floor(totalSeconds || 0);
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;
    const two = (n: number) => String(n).padStart(2, '0');
    return hours > 0
      ? `${hours}:${two(minutes)}:${two(seconds)}`
      : `${minutes}:${two(seconds)}`;
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  }

  function seekTo(value: number) {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(value)) return;
    audio.currentTime = value;
    setCurrentTime(value);
  }

  function skipBy(seconds: number) {
    const audio = audioRef.current;
    if (!audio) return;
    seekTo(Math.min(Math.max(0, audio.currentTime + seconds), duration || 0));
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !audio.muted && audio.volume === 0 ? true : !audio.muted;
    setMuted(nextMuted);
  }

  const VolumeIcon = muted || volume === 0 ? VolumeX : Volume1;
  const progressPercent = React.useMemo(() => {
    if (!duration) return 0;
    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  function handleProgressPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = progressRef.current;
    if (!el || !duration) return;
    setIsSeeking(true);

    const updateFromClientX = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
      const ratio = rect.width ? x / rect.width : 0;
      const newTime = ratio * duration;
      setCurrentTime(newTime);
      if (audioRef.current) audioRef.current.currentTime = newTime;
    };

    updateFromClientX(e.clientX);

    const onMove = (ev: PointerEvent) => updateFromClientX(ev.clientX);
    const onUp = () => {
      setIsSeeking(false);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp, { once: true });
  }

  function onProgressKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!duration) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      skipBy(-5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      skipBy(5);
    } else if (e.key === 'Home') {
      e.preventDefault();
      seekTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      seekTo(duration);
    }
  }

  function handleVolumePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = volumeRef.current;
    if (!el) return;

    const updateFromClientX = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
      const ratio = rect.width ? x / rect.width : 0;
      const newVolume = ratio;
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
        if (newVolume > 0 && audioRef.current.muted) setMuted(false);
      }
    };

    updateFromClientX(e.clientX);

    const onMove = (ev: PointerEvent) => updateFromClientX(ev.clientX);
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp, { once: true });
  }

  function onVolumeKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const v = Math.max(0, volume - 0.1);
      setVolume(v);
      if (v > 0 && muted) setMuted(false);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const v = Math.min(1, volume + 0.1);
      setVolume(v);
      if (v > 0 && muted) setMuted(false);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setVolume(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setVolume(1);
    }
  }

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <audio ref={audioRef} preload={preload} src={src} className="hidden" />

      <div className="flex items-center ">
        <Button
          aria-label={isPlaying ? 'Pause' : 'Play'}
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className="border rounded-full cursor-pointer border-slate-200 bg-white "
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <div className="flex items-center ">
          <Button
            aria-label={muted ? 'Unmute' : 'Mute'}
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="hover:bg-slate-100 cursor-pointer player-play-btn"
          >
            <VolumeIcon />
          </Button>
          <div
            ref={volumeRef}
            className="relative h-1 w-14 rounded bg-slate-200 cursor-pointer select-none"
            role="slider"
            aria-label="Volume"
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={muted ? 0 : volume}
            tabIndex={0}
            onPointerDown={handleVolumePointerDown}
            onKeyDown={onVolumeKeyDown}
          >
            <div
              className="absolute inset-y-0 left-0 rounded bg-foreground/60"
              style={{ width: `${(muted ? 0 : volume) * 100}%` }}
            />
          </div>

          <div className="ml-2 flex items-center gap-2 shrink-0">
            <Select value={speed} onValueChange={setSpeed}>
              <SelectTrigger
                size="default"
                className="cursor-pointer p-1 justify-start gap-0 w-fit"
              >
                <SelectValue aria-label={`${speed}×`}>{speed}×</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {PLAYBACK_SPEEDS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}×
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {formatTime(currentTime)}
        <div
          ref={progressRef}
          className="relative h-1 w-full rounded bg-slate-200 cursor-pointer select-none"
          onPointerDown={handleProgressPointerDown}
          onKeyDown={onProgressKeyDown}
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={duration || 0}
          aria-valuenow={currentTime}
          tabIndex={0}
        >
          <div
            className="absolute inset-y-0 left-0 rounded bg-foreground/60"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {formatTime(duration / 1000)}
      </div>
    </div>
  );
}
