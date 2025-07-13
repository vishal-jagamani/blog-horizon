'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';
import { SignUpInputProps } from '../auth.types';

const SignUpInput: React.FC<SignUpInputProps> = ({ name, label, error, icon: Icon, status, helperText, loading, ...rest }) => {
    return (
        <>
            <div className="relative flex flex-col gap-1">
                <label htmlFor={name} className="text-sm font-semibold">
                    {label}
                </label>
                <div className="relative">
                    {Icon && (
                        <Icon
                            size={18}
                            strokeWidth={2}
                            className={cn(
                                'text-foreground absolute top-1/2 left-2 -translate-y-1/2',
                                error && 'text-red-500',
                                status === 'success' && 'text-green-500',
                            )}
                        />
                    )}
                    <Input
                        id={name}
                        name={name}
                        autoComplete="off"
                        className={cn(
                            'bg-background ring-foreground placeholder:text-muted-foreground text-sm',
                            Icon && 'pl-8',
                            status === 'error' && 'border-red-500 ring-[0.5px] ring-red-500 focus-visible:ring-red-500',
                            status === 'success' && 'border-green-500 ring-[0.5px] ring-green-500 focus-visible:ring-green-500',
                            rest.className,
                            rest.extrastyle,
                        )}
                        {...rest}
                    />
                </div>
                {error && status === 'error' && <span className="absolute mt-16 text-xs text-red-500">{error}</span>}
                {loading && <div className="border-t-primary absolute top-8 right-2 size-5 animate-spin rounded-full border-2 border-gray-300"></div>}
                {helperText && status === 'success' && <span className="absolute mt-16 text-xs text-green-600">{helperText}</span>}
            </div>
        </>
    );
};

export default SignUpInput;
