import { useRouter } from "next/router";

import NavItem from "src/commons/components/NavItem";
import { toTagName } from "src/features/tweet/util/TweetUtility";

/// グローバルメニュー
export const Nav = () => {
  const { tag: selectedTag } = useRouter().query;

  return (
    <nav className="my-2">
      <ul className="list-none flex flex-row flex-wrap gap-4 items-center">
        <NavItem
          url="/"
          text={toTagName("0")}
          isCurrent={selectedTag == null || selectedTag === "0"}
        />
        <NavItem
          url="/tag/1/page/1"
          text={toTagName("1")}
          isCurrent={selectedTag === "1"}
        />
        <NavItem
          url="/tag/2/page/1/"
          text={toTagName("2")}
          isCurrent={selectedTag === "2"}
        />
        <NavItem
          url="/tag/3/page/1/"
          text={toTagName("3")}
          isCurrent={selectedTag === "3"}
        />
        <NavItem
          url="/tag/4/page/1/"
          text={toTagName("4")}
          isCurrent={selectedTag === "4"}
        />
      </ul>
    </nav>
  );
};
