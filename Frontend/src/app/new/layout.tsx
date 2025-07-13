import '../globals.css';
import { Providers } from '../providers';

export default function NewPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-screen bg-white antialiased dark:bg-black">
            <Providers>{children}</Providers>
        </div>
    );
}
