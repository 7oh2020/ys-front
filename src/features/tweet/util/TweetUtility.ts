/// タグIDをタグ名に変換する
export const toTagName = (tagID: string | string[] | undefined): string => {
  switch (tagID) {
    case "1":
      return "アプリ";
    case "2":
      return "サービス";
    case "3":
      return "ゲーム";
    case "4":
      return "イベント";
  }
  return "総合";
};
