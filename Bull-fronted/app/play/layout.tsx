import localFont from "next/font/local";
import Header from "@/app/common/header/header"

const font = localFont({
  src: "../fonts/PixelifySans-Regular.ttf",
  weight: "100 900",
});

export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-background`}
      >
        <div>
           <Header />

        {children}
        </div>
       

      </body>
    </html>
  );
}
