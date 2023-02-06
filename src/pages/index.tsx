import { NextSeo } from "next-seo";

import { CommonValue } from "src/commons/common_value";
import { Pagination } from "src/features/tweet/components/Pagination";
import TweetCard from "src/features/tweet/components/TweetCard";
import { Tweet, TweetIndexResponse } from "src/features/tweet/types/Tweet";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/// トップページ(URL: /)
export default function Home({ tweets }: Props) {
  return (
    <main>
      <NextSeo titleTemplate='%s' title={CommonValue.appName} />

      <div className="flex flex-row flex-wrap items-center">
        <h2>最新</h2>
        <div className="mx-auto">
          <img
            src={`${CommonValue.appUrl}/images/twitter_logo_blue.png`}
            width="32"
            alt="Twitter Logo"
          />
        </div>
      </div>

      {tweets?.map((tweet) => (
        <TweetCard tweet={tweet} key={tweet.id} />
      ))}

      <Pagination tagID={"0"} pageStr={"1"} />
    </main>
  );
}

export const getStaticProps: GetStaticProps<{
  tweets: Tweet[];
}> = async (ctx) => {
  // 総合の1ページ目を取得する
  const resp = await fetch(`${CommonValue.fetchIndexUrl}?tag_id=0&page=1`);
  const tweets: TweetIndexResponse = await resp.json();

  return {
    props: {
      tweets: tweets.items,
    },
  };
};
