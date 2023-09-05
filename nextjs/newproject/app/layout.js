import Header from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
