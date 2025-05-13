import { leftNavigationOptionType, settingsOptionType } from '@/types/data.config.types';

export const leftNavigationOptions: leftNavigationOptionType[] = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Reading List', link: '/reading-list' },
    { id: 3, title: 'Tags', link: '/tags' },
    { id: 4, title: 'Help', link: '/help' },
    { id: 5, title: 'About', link: '/about' },
    { id: 6, title: 'Contact', link: '/contact' },
    { id: 7, title: 'Privacy Policy', link: '/privacy-policy' },
    { id: 8, title: 'Terms of use', link: '/terms-of-use' },
];

export const settingsOptions: settingsOptionType[] = [
    { id: 1, title: 'Profile', link: '/settings/profile' },
    { id: 2, title: 'Customization', link: '/settings/customization' },
    { id: 3, title: 'Notifications', link: '/settings/notifications' },
    { id: 4, title: 'Account', link: '/settings/account' },
    { id: 5, title: 'Organization', link: '/settings/organization' },
    // { id: 6, title: 'Extensions', link: '/settings/extensions' },
];
