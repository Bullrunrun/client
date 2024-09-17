import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ArweaveWalletKit,ConnectButton } from "arweave-wallet-kit"; // 确保使用正确的导入路径

const font = localFont({
  src: "./fonts/PixelifySans-Regular.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "DISPATCH"],
        ensurePermissions: true,
      }}
    >
      <html lang="en">
        <body
          className={`${font.className} bg-background bg-menu`}
        >
          <div className={`${font.className}`}>
            {children}
          </div>

        </body>
      </html>
    </ArweaveWalletKit>
  );
}