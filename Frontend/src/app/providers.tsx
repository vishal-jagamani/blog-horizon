'use client';

import { AuthGuard } from '@/components/AuthGuard';
import ScreenLoader from '@/components/home/ScreenLoader';
import { ThemeProvider } from '@/components/theme-provider';
import UserInitializer from '@/components/UserInitializer';
import { useUserStore } from '@/features/auth/auth.store';
import { Auth0Provider } from '@auth0/nextjs-auth0';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    const isUserInitialized = useUserStore((state) => state.isUserInitialized);

    return (
        <Auth0Provider user={undefined}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <UserInitializer />
                    <AuthGuard />
                    {isUserInitialized ? children : <ScreenLoader />}
                </ThemeProvider>
            </QueryClientProvider>
        </Auth0Provider>
    );
}
