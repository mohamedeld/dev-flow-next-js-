import type { Metadata } from "next";
import { Inter,Space_Grotesk} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-inter'
 });
const spaceGrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700'],
  variable:'--font-space'
})
export const metadata: Metadata = {
  title: "Dev Flow",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge and collaborate with developers from around the world Explore topics in web development, mobile app development, alogrithms and data structure and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
