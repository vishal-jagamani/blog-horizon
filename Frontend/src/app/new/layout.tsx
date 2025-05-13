import '../globals.css';
import { Providers } from '../providers';

export default function NewPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body>
                <div className="flex w-screen bg-white antialiased dark:bg-black">
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
