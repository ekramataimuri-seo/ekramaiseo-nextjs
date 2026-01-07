import { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode } from "@/gql/graphql";
import PageTemplate from "@/components/Templates/Page/PageTemplate";
import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";
import { setSeoData } from "@/utils/seoData";

// This tells the code to fetch the content from the WordPress page with slug 'home'
const HOMEPAGE_SLUG = "home"; 

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    { slug: HOMEPAGE_SLUG, idType: "URI" }
  );

  if (!contentNode) return { title: "Home" };

  return setSeoData({ seo: contentNode.seo });
}

export default async function Home() {
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(ContentInfoQuery),
    { slug: HOMEPAGE_SLUG, idType: "URI" }
  );

  // If the 'home' page doesn't exist in WordPress, this will show 404
  if (!contentNode) return notFound();

  return <PageTemplate node={contentNode} />;
}
