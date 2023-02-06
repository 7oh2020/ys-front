/// プロジェクト内で使用する定数
export const CommonValue = {
  /// サイト名
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? "App Name",

  /// サイト説明
  appDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? "App Description",

  /// サイトURL
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",

  /// デフォルトの言語
  defaultLocale: "ja_JP",

  /// デフォルトの言語(短縮形)
  defaultLocaleShort: "ja",

  // TwitterのベースURL
  twitterBaseURL: "https://twitter.com",

  // メタ情報を取得するバックエンドURL
  fetchMetaUrl: process.env.NEXT_PUBLIC_FETCH_META_URL ?? "FETCH_META_URL",

  // ツイートを取得するバックエンドURL
  fetchIndexUrl: process.env.NEXT_PUBLIC_FETCH_INDEX_URL ?? "FETCH_INDEX_URL",
};
