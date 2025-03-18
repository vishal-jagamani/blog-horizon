import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Blog Horizon',
    description: 'Blog Horizon is a modern full-stack blogging platform where you can write, manage, and explore insightful articles.',
    keywords: ['Blog Horizon', 'Blog Platform', 'Next.js Blog', 'Spring Boot API', 'MongoDB Blog', 'Full Stack Blogging App'],
    authors: [{ name: 'Vishal Jagamani' }],
    creator: 'Vishal Jagamani',
    publisher: 'Blog Horizon',
    // still to add
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <UserProvider>
                <body className={`${inter.variable} antialiased`}>{children}</body>
            </UserProvider>
        </html>
    );
}
