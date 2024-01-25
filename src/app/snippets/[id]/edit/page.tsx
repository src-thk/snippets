import SnippetEditForm from "@/components/edit-snippet-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface EditSnippetPageProps {
    params: {
        id: string;
    };
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: { id }
    });

    if (!snippet) {
        return notFound();
    }
    return (
        <div>Edit page
            <SnippetEditForm snippet={snippet} />
        </div>
    );
}