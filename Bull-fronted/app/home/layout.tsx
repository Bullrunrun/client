import localFont from "next/font/local";
import Header from "@/app/common/header/header"

const font = localFont({
  src: "../fonts/PixelifySans-Regular.ttf",
  weight: "100 900",
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className={`${font.className} min-h-screen bg-background bg-home`}>
          <div>
           <Header />

        {children}
        </div>
    </div>
  );
}
