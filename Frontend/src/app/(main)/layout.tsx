import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Providers } from '../providers';
import NavBar from '@/components/home/NavBar';
import { Separator } from '@/components/ui/separator';

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
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${inter.variable} flex w-screen bg-white antialiased dark:bg-black`}>
                <div className="flex w-screen flex-col">
                    <Providers>
                        <NavBar />
                        <Separator className="mb-[100px] sm:mb-14" />
                        {children}
                    </Providers>
                </div>
            </body>
        </html>
    );
}
