import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetPageProps {
    params: {
        id: string;
    };
}

export default async function SnippetPage(props: SnippetPageProps) {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: { id }
    });
    if (!snippet) {
        return notFound();
    }
    return (
        <div key={snippet.id}>
            <p>{snippet.title}</p>
            <pre>
                <code>{snippet.code}</code>
            </pre>
            <div>
                <Link className="px-2" href={`${snippet.id}/edit`}>Edit</Link>
            </div>
        </div >
    );;
}

export async function generateStaticParams() {
    const snippets = await db.snippet.findMany();
    return snippets.map(snippet => {
        return { id: snippet.id.toString() };
    });
}