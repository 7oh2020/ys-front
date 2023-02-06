import Link from "next/link";

import { CommonValue } from "src/commons/common_value";
import Share from "src/commons/components/share";

/// フッター
export default function Footer() {
  return (
    <footer className="my-4">
      <div className="text-center">
        <h3>Share</h3>
        <Share text={CommonValue.appName} url={CommonValue.appUrl} />
      </div>

      <div className="my-2 text-opacity-70">
        <ul className="flex flex-row flex-wrap justify-center items-center">
          <li>
            <Link href="/">ホーム</Link>
          </li>
        </ul>
      </div>
      <div className="text-opacity-70 text-center">Footer Links</div>
    </footer>
  );
}
