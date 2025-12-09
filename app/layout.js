import { urbanist } from "./css/fonts";
import "./css/globals.css";

export const metadata = {
  title: "Astrology Site",
  description: "Astrology Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}  antialiased`}>{children}</body>
    </html>
  );
}
