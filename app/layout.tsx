import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "José Wellington Jr. | Full Stack Developer",
  description:
    "Portfólio de José Wellington Júnior: desenvolvimento web, análise de dados e aplicações SaaS.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
