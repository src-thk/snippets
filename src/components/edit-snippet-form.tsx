'use client';
import { editSnippet, deleteSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState, useTransition } from "react";


interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);
    const [isPending, startTransition] = useTransition();
    const handleEditorOnChange = (value: string = '') => {
        setCode(value);
    };
    return (
        <div>
            <Editor
                onChange={handleEditorOnChange}
                theme="vs-dark"
                height="30vh"
                language="javascript"
                defaultValue={code}
                options={{ minimap: { enabled: false } }
                }
            />
            <button className="px-2" onClick={() => startTransition(() => editSnippet(snippet.id, code))}>Save</button>
            <button className="px-2" onClick={() => startTransition(() => deleteSnippet(snippet.id))}>Delete</button>
        </div>
    );
}