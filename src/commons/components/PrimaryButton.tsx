import Link from "next/link";

type Props = {
  text: string;
  url: string;
};

/// もっと見るボタン
export default function PrimaryButton({ text, url }: Props) {
  return (
    <div className="relative w-1/3 h-8 text-center">
      <Link
        href={url}
        className="block absolute top-0 left-0 w-full h-full bg-blue-600 text-white text-lg font-bold"
      >
        {text}
      </Link>
    </div>
  );
}
