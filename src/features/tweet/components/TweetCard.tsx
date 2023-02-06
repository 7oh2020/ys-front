import { useEffect, useState } from "react";

import { CommonValue } from "src/commons/common_value";
import { formatTime } from "src/commons/util/TimeUtility";
import { Tweet } from "src/features/tweet/types/Tweet";

type Props = {
  tweet: Tweet;
};

/// ツイートのリストアイテム
export default function TweetCard({ tweet }: Props) {
  const [createdAt, setCreatedAt] = useState("");

  const sourceUrl = `${CommonValue.twitterBaseURL}/${tweet.user_name}/status/${tweet.id}`;

  useEffect(() => {
    if (window) {
      setCreatedAt(formatTime(tweet.created_at));
    }
  }, [tweet.created_at]);

  const userUrl = `${CommonValue.twitterBaseURL}/${tweet.user_name}`;

  return (
    <div className="my-4">
      <div className="flex flex-row flex-wrap items-start">
        <div className="w-12">
          <a href={userUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={tweet.avatar_url.replace("_normal", "_bigger")}
              alt={"プロフィール"}
              width="32"
              height="32"
              className="rounded-full"
            />
          </a>
        </div>
        <div>
          <div>
            <a href={userUrl} target="_blank" rel="noopener noreferrer">
              {tweet.name}
            </a>
          </div>
          <div className="text-opacity-70">{`@${tweet.user_name}`}</div>
        </div>
      </div>
      <div className="py-1">{tweet.text}</div>
      <div className="text-opacity-70">
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          {createdAt}
        </a>
      </div>
    </div>
  );
}
