import React from 'react';

export const metadata = {
  title: 'Havenly Wellness',
  description: 'Tu espacio de equilibrio, fe y transformación integral',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
