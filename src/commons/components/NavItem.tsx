import Link from "next/link";

type Props = {
  text: string;
  url: string;
  isCurrent: boolean;
};

/// グローバルメニューのアイテム
/// aria-current属性のおかげで支援技術を使用するユーザーは現在のページが把握できる
export default function NavItem({ text, url, isCurrent }: Props) {
  return (
    <li className="text-center">
      <Link
        href={url}
        className="px-4 py-2 bg-blue-600 text-white text-lg font-bold"
        aria-current={isCurrent ? "page" : undefined}
      >
        {text}
      </Link>
    </li>
  );
}
