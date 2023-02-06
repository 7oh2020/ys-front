import { url } from 'inspector';

import { DefaultSeoProps } from 'next-seo';

/// next-seoのデフォルト値
/// docs:  https://github.com/garmeeh/next-seo
export const getDefaultSEO = ({
  title,
  url,
  description,
  locale = 'ja_JP',
  defaultOgp = {
    path: '/images/ogp.png',
    width: 1200,
    height: 630,
    alt: 'OG Image',
    type: 'image/png',
  },
  pwaDir = '',
}: {
  title: string;
  url: string;
  description: string;
  locale?: string;
  defaultOgp?: {
    path: string;
    width: number;
    height: number;
    alt: string;
    type: string;
  };
  pwaDir?: string;
}): DefaultSeoProps => {
  /// metaタグのリスト
  const additionalMetaTags = [
    {
      property: 'application-name',
      content: title,
    },
    {
      property: 'apple-mobile-web-app-capable',
      content: 'yes',
    },

    {
      property: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },

    {
      property: 'apple-mobile-web-app-title',
      content: title,
    },

    {
      property: 'apple-mobile-web-app-title',
      content: title,
    },

    {
      property: 'description',
      content: description,
    },

    {
      property: 'format-detection',
      content: 'telephone=no',
    },

    {
      property: 'mobile-web-app-capable',
      content: 'yes',
    },

    {
      property: 'msapplication-config',
      content: `${pwaDir}/browserconfig.xml`,
    },

    {
      property: 'msapplication-TileColor',
      content: '#333333',
    },
    {
      property: 'msapplication-tap-highlight',
      content: 'no',
    },

    {
      property: 'theme-color',
      content: '#000000',
    },
  ];

  /// linkタグのリスト
  const additionalLinkTags = [
    {
      rel: 'manifest',
      href: `${pwaDir}/manifest.json`,
    },
    {
      rel: 'shortcut icon',
      href: `${pwaDir}/favicon.ico`,
    },
    {
      rel: 'apple-touch-icon',
      href: `${pwaDir}/touch-icon-iphone.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: `${pwaDir}/touch-icon-ipad.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `${pwaDir}/touch-icon-iphone-retina.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '167x167',
      href: `${pwaDir}/touch-icon-ipad-retina.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${pwaDir}/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${pwaDir}/favicon-16x16.png`,
    },

    {
      rel: 'mask-icon',
      href: `${pwaDir}/safari-pinned-tab.svg`,
      color: '#333333',
    },
  ];

  /// OGPの設定
  const openGraph = {
    type: 'website',
    locale,
    url,
    site_name: title,
    images: [
      {
        url: defaultOgp.path,
        width: defaultOgp.width,
        height: defaultOgp.height,
        alt: defaultOgp.alt,
        type: defaultOgp.type,
      },
    ],
  };

  /// TwitterCardの設定
  const twitter = {
    cardType: 'summary_large_image',
    site: url,
  };

  const seo = {
    titleTemplate: `%s | ${title}`,
    title: 'Home',
    description: description,
    additionalMetaTags,
    additionalLinkTags,
    openGraph,
    twitter,
  };

  return seo;
};
