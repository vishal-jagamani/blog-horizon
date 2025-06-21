import type { SVGProps } from 'react';

export interface leftNavigationOptionType {
    id: number;
    title: string;
    link: string;
    // icon?: typeof Icon;
    icon?: React.FC<SVGProps<SVGSVGElement>>;
}

export interface settingsOptionType {
    id: number;
    title: string;
    link: string;
}
