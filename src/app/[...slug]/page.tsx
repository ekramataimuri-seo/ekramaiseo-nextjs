import { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { setSeoData } from "@/utils/seoData";

const PAGE_QUERY = gql`
  query PageQuery($uri: ID!) {
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

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const slug = (await params).slug;
  const uri = `/${slug.join("/")}/`;
  
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(PAGE_QUERY),
    { uri }
  );

  if (!contentNode) return { title: "Page Not Found" };
  return setSeoData({ seo: contentNode.seo });
}

export default async function Page({ params }: { params: any }) {
  const slug = (await params).slug;
  const uri = `/${slug.join("/")}/`;

  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(PAGE_QUERY),
    { uri }
  );

  if (!contentNode) return notFound();

  return (
    <main className="container mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-6">{contentNode.title}</h1>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentNode.content }} 
      />
    </main>
  );
}
