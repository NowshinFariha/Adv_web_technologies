import './globals.css';
import Navbar from '../components/navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Next App',
  description: 'Basic navigation with TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}