'use client';

import { useEditorStore } from '@/store/blogs/editor';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownEditor: React.FC = () => {
    const editorRef = useRef<HTMLTextAreaElement>(null);
    const [markdown, setMarkdown] = useState('');

    const setApplyBold = useEditorStore((state) => state.setApplyBold);

    useEffect(() => {
        if (editorRef.current) {
            const textarea = editorRef.current;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const text = textarea.value;
            const selected = text.substring(start, end);
            const newText = text.substring(0, start) + `**${selected}**` + text.substring(end);

            textarea.value = newText;
            textarea.focus();
            textarea.selectionStart = start + 2;
            textarea.selectionEnd = end + 2;
        }
    }, [setApplyBold]);

    return (
        <>
            <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
                <textarea
                    ref={editorRef}
                    className="bg-background h-[100%] w-full resize-none rounded p-4 font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-300 focus:outline-none"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Write your markdown here..."
                />
                <div className="h-full w-full max-w-none overflow-auto rounded border p-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default MarkdownEditor;
