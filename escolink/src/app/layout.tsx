import "./globals.css";

import { Metadata } from "next";

// Metadado global
export const metadata: Metadata = {
  title: 'Escolink',
  description: '...', // Atualizar descrição
  openGraph: {
    title: 'Escolink',
    description: '...',
    images: [''], // Adicionar imagem
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >

        {children}

      </body>
    </html>
  );
}