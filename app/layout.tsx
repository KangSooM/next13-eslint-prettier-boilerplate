import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js + eslint + prettier boilerplate</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
