import { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { setSeoData } from "@/utils/seoData";

// 1. Define the Query specifically to get CONTENT
const HOME_QUERY = gql`
  query HomeQuery($uri: ID!) {
    contentNode(id: $uri, idType: URI) {
      ... on Page {
        id
        title
        content
        seo {
          fullHead
          title
          metaDesc
        }
      }
    }
  }
`;

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(HOME_QUERY),
    { uri: "/home/" }
  );

  if (!contentNode) return { title: "Home" };
  return setSeoData({ seo: contentNode.seo });
}

export default async function Home() {
  // 2. Try fetching with Slashes
  let { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(HOME_QUERY),
    { uri: "/home/" }
  );

  // 3. Fallback: If failed, try without slashes
  if (!contentNode) {
    const retry = await fetchGraphQL<{ contentNode: any }>(
      print(HOME_QUERY),
      { uri: "home" }
    );
    contentNode = retry.contentNode;
  }

  // 4. If still nothing, show 404
  if (!contentNode) return notFound();

  // 5. RENDER DIRECTLY
  return (
    <main className="container mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-6">{contentNode.title}</h1>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentNode.content || "<p>No content found in WordPress editor.</p>" }} 
      />
    </main>
  );
}
