'use client';

import React from 'react';
import { Input } from '../ui/input';

const SearchInput: React.FC = () => {
    return (
        <>
            <Input
                type="search"
                placeholder="Search..."
                className="placeholder:text-foreground w-full focus-within:border-red-600 sm:w-2xl"
                onKeyDown={(e) => console.log('Search...', e.key)}
            />
        </>
    );
};

export default SearchInput;
