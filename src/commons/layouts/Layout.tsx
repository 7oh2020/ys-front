import { ReactNode } from "react";

import Footer from "src/commons/layouts/Footer";
import Header from "src/commons/layouts/header";

type Props = {
  children?: ReactNode;
};

/// 共通レイアウト
export default function Layout({ children }: Props) {
  return (
    <div
      className="container mx-auto min-h-screen"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "100%",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
