import '../styles/globals.css';

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SMARTECH",
};

import { Prompt } from "next/font/google";
const prompt = Prompt({ subsets: ["latin"], weight: ['400','500', '600', '700'] });

export default function RootLayout({ children }: {children: React.ReactNode}) 
  {return (
    <html lang="PT-BR">
      <body className={prompt.className}>
        {children}
      </body>
    </html>
  );
}