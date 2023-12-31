import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./shared/SideBar/page";
import Footer from "./shared/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Noman",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="container mx-auto lg:flex">
          <div className="fixed">
            <SideBar />
          </div>
          <div className="pl-[320px]">
            <div className="ml-6">{children}</div>
            {/* <div className="text-center fixed bottom-0 mx-auto w-[70%] mb-4">
              <Footer />
            </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
