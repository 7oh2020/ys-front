import Link from "next/link";

import { CommonValue } from "src/commons/common_value";
import { Nav } from "src/commons/components/Nav";

/// ヘッダー
export default function Header() {
  return (
    <div className="my-4">
      <header>
        <Link href="/">
          <h2>{CommonValue.appName}</h2>
        </Link>
        <div className="py-2">
          ここはみんなの「あったらいいな」が集まる場所です。
        </div>
      </header>

      <Nav />
    </div>
  );
}
