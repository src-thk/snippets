'use client';

import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

export default function CreateSnippetPage() {
    const [formStatus, action] = useFormState(createSnippet, { message: '' });
    return (
        <div>
            <form className="flex flex-col p-5" action={action}>
                <label>enter a title</label>
                <input name='title' className='dark:text-black' />
                <label>have your snippets here</label>
                <textarea name='code' className='dark:text-black' />
                <button type="submit">save me</button>
                <div>{formStatus.message}</div>
            </form>
        </div>
    );
}