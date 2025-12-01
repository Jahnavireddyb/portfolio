import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jahnavi - Software Engineer Portfolio',
  description:
    'Portfolio of Jahnavi Reddy – Software Engineer skilled in backend, full-stack development, microservices, and data-driven systems.',

  
  openGraph: {
    title: 'Jahnavi - Software Engineer Portfolio',
    description:
      'Explore projects, experience, and skills from Jahnavi — backend and full-stack engineer.',
    url: 'https://portfolio-red-xi-75.vercel.app/',
    siteName: 'Jahnavi Portfolio',
    images: [
      {
        url: '/Jahnavi.png',
        width: 800,
        height: 800,
        alt: 'Jahnavi Portfolio Image',
      },
    ],
    type: 'website',
  },

  // 🔥 This controls Twitter / iMessage previews
  twitter: {
    card: 'summary_large_image',
    title: 'Jahnavi - Software Engineer Portfolio',
    description:
      'Software Engineer specializing in backend, APIs, cloud, and full-stack applications.',
    images: ['/Jahnavi.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}