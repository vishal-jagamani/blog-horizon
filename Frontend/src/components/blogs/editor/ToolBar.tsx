'use client';

import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';
import React from 'react';

const ToolBar: React.FC = () => {
    return (
        <>
            <div className="flex space-x-4">
                <Toggle value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle value="strikethrough" aria-label="Toggle strikethrough">
                    <Underline className="h-4 w-4" />
                </Toggle>
            </div>
        </>
    );
};

export default ToolBar;
