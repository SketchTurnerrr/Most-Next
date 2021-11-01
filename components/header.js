import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function Header() {
  const desc = 'EFCU Bridge Church Kryvyi Rih';

  const siteURL = 'https://most-kr.com';
  const ogImageURL =
    'https://res.cloudinary.com/deprog/image/upload/c_scale,q_61,w_1200/v1633698917/main_rhzsro.jpg';
  const pathName = useRouter().pathname;
  const pageURL = pathName === '/' ? siteURL : siteURL + pathName;
  const siteName = 'most-kr.com';

  return (
    <NextSeo
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: pageURL,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: 'Bridge Church Kryvyi Rih',
          },
        ],
        site_name: siteName,
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${siteURL}/favicon.ico`,
        },
        {
          rel: 'manifest',
          href: '/site.manifest',
        },
      ]}
    />
  );
}
