import { create } from 'zustand';

interface EditorState {
    applyBold: () => void;
    setApplyBold: (fn: () => void) => void;
}

interface NewBlogState {
    title: string;
    setTitle: (title: string) => void;
    content: string;
    setContent: (content: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
    applyBold: () => {},
    setApplyBold: (fn) => set({ applyBold: fn }),
}));

export const useNewBlogStore = create<NewBlogState>((set) => ({
    title: '',
    setTitle: (title) => set({ title }),
    content: '',
    setContent: (content) => set({ content }),
}));
