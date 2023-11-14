import React from "react";
import "../style/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <title>EMPCD</title>
      <body>{children}</body>
    </html>
  );
}
