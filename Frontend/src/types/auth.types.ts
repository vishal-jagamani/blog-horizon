import { LucideIcon } from 'lucide-react';

export interface SignUpInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
    error: string;
    icon?: LucideIcon;
}
