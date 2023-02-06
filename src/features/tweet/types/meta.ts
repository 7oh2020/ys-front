/// メタ情報のレスポンス
export type TweetMetaResponse = {
  count_per_page: number;
  tags: MetaTag[];
};

/// タグ情報
export type MetaTag = {
  // タグID
  tag_id: number;

  // ツイート件数
  count: number;
};
