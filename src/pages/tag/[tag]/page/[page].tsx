import Head from "next/head";
import { ParsedUrlQuery } from "node:querystring";

import { CommonValue } from "src/commons/common_value";
import { Pagination } from "src/features/tweet/components/Pagination";
import TweetCard from "src/features/tweet/components/TweetCard";
import { TweetMetaResponse } from "src/features/tweet/types/meta";
import { Tweet, TweetIndexResponse } from "src/features/tweet/types/Tweet";
import { toTagName } from "src/features/tweet/util/TweetUtility";

import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

interface Meta {
  params: {
    tag: string;
    page: string;
  };
}
interface Params extends ParsedUrlQuery {
  tag: string;
  page: string;
}

interface Props {
  tweets: Tweet[];
  tagName: string;
  tagId?: string | string[];
  page?: string | string[];
}

export default function Index({ tweets, tagId, tagName, page }: Props) {
  return (
    <div>
      <Head>
        <title>
          {tagName} - ページ {page} | {CommonValue.appName}
        </title>
      </Head>

      <main>
        <div className="flex flex-row flex-wrap items-center">
          <h2>
            {tagName} - ページ {page}
          </h2>
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
      </main>

      <Pagination tagID={tagId} pageStr={page} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const resp = await fetch(CommonValue.fetchMetaUrl);
  const meta: TweetMetaResponse = await resp.json();

  // タグID毎のパスを作成する
  let paths: Meta[] = [];
  for (let i = 0; i < meta.tags.length; i++) {
    const tagID = meta.tags[i].tag_id.toString();
    const maxPage = Math.ceil(meta.tags[i].count / meta.count_per_page);

    // 1ページ目から最終ページまでのパスを作成する
    let pagePaths: Meta[] = [];
    for (let p = 1; p < maxPage; p++) {
      const path = {
        params: {
          tag: tagID,
          page: p.toString(),
        },
      };
      pagePaths = [...pagePaths, path];
    }
    paths = paths.concat(pagePaths);
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext,
) => {
  const { params } = context;
  const resp = await fetch(
    `${CommonValue.fetchIndexUrl}?tag_id=${params?.tag}&page=${params?.page}`,
  );
  const tweets: TweetIndexResponse = await resp.json();

  return {
    props: {
      tweets: tweets.items,
      tagID: params?.tag,
      tagName: toTagName(params?.tag),
      page: params?.page,
    },
  };
};
