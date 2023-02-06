/// レスポンス情報
export type TweetIndexResponse = {
  items: Tweet[];
};

/// ツイート情報
export type Tweet = {
  id: string;
  text: string;
  created_at: string;
  user_name: string;
  name: string;
  avatar_url: string;
};
