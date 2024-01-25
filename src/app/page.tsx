import { db } from "@/db";
import Link from "next/link";

export default async function ShowAllSnippetPage() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map(snippet => {
    return (
      <div key={snippet.id}>
        <Link href={`snippets/${snippet.id}`}>{snippet.title}</Link>
        <p>{snippet.code}</p>
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-between">
        <p></p>
        <Link href={'snippets/new'}>new</Link>
      </div>
      {renderedSnippets}
    </div>
  );
}
