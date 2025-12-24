import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { Newsletter } from "@/components/newsletter";
import { GetInTouch } from "@/components/get-in-touch";
import { AppHeader } from "@/components/header";

const syne = Syne({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bankiffy",
  description:
    "Join the community of diverse founders across different regions in Africa, driving change in their region through financial inclusive program of bankiffy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} pb-8 md:pb-14 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32 max-w-[1800px] mx-auto antialiased flex flex-col gap-y-6 md:gap-y-10`}
      >
        <AppHeader />
        {children}
        <GetInTouch />
        <Newsletter />
      </body>
    </html>
  );
}
