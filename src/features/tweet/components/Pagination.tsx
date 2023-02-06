import PrimaryButton from "src/commons/components/PrimaryButton";

type Props = {
  tagID: string | string[] | undefined;
  pageStr: string | string[] | undefined;
};

/// ツイートリストのページネーション
export const Pagination = ({ tagID, pageStr }: Props) => {
  if (typeof pageStr !== "string") {
    return null;
  }
  // 計算に使用するため数値に変換する
  const page = parseInt(pageStr);

  return (
    <nav className="flex flex-row flex-wrap justify-center py-8">
      {page <= 1 && (
        <PrimaryButton url={`/tag/${tagID}/page/2/`} text={"もっと見る"} />
      )}
      {page > 1 && (
        <PrimaryButton
          url={`/tag/${tagID}/page/${page - 1}/`}
          text={"前のページ"}
        />
      )}
      {page > 1 && (
        <PrimaryButton
          url={`/tag/${tagID}/page/${page + 1}/`}
          text={"次のページ"}
        />
      )}
    </nav>
  );
};
