'use client';

import { AuthGuard } from '@/components/AuthGuard';
import UserInitializer from '@/components/UserInitializer';
import { ThemeProvider } from '@/components/theme-provider';
import { Auth0Provider } from '@auth0/nextjs-auth0';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Auth0Provider user={undefined}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <UserInitializer />
                    <AuthGuard />
                    {children}
                </ThemeProvider>
            </QueryClientProvider>
        </Auth0Provider>
    );
}
