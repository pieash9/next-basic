import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Hero Pieash",
  description: "Me hero",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.className} font-roboto`}
      >
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
