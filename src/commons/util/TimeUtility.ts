/// UTCを表示用にフォーマットする
export const formatTime = (utc: string): string => {
  const time = new Date(utc);
  return time.toLocaleString().slice(0, -3);
};
