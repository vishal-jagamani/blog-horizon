import { leftNavigationOptionType, settingsOptionType } from '@/types/data.config.types';

import { BookMarked, FileText, House, Info, Lightbulb, LockKeyhole, Mail, Tag } from 'lucide-react';

export const leftNavigationOptions: leftNavigationOptionType[] = [
    { id: 1, title: 'Home', link: '/', icon: House },
    { id: 2, title: 'Reading List', link: '/reading-list', icon: BookMarked },
    { id: 3, title: 'Tags', link: '/tags', icon: Tag },
    { id: 4, title: 'Help', link: '/help', icon: Lightbulb },
    { id: 5, title: 'About', link: '/about', icon: Info },
    { id: 6, title: 'Contact', link: '/contact', icon: Mail },
    { id: 7, title: 'Privacy Policy', link: '/privacy-policy', icon: LockKeyhole },
    { id: 8, title: 'Terms of use', link: '/terms-of-use', icon: FileText },
];

export const settingsOptions: settingsOptionType[] = [
    { id: 1, title: 'Profile', link: '/settings/profile' },
    { id: 2, title: 'Customization', link: '/settings/customization' },
    { id: 3, title: 'Notifications', link: '/settings/notifications' },
    { id: 4, title: 'Account', link: '/settings/account' },
    { id: 5, title: 'Organization', link: '/settings/organization' },
    // { id: 6, title: 'Extensions', link: '/settings/extensions' },
];
