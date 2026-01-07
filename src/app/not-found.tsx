import type { Metadata } from "next";
import { print } from "graphql/language/printer";
import Link from "next/link"; // Added for the home button

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode, Page } from "@/gql/graphql";
import { PageQuery } from "@/components/Templates/Page/PageQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";

const notFoundPageWordPressId = 501;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
      print(SeoQuery),
      { id: notFoundPageWordPressId, idType: "DATABASE_ID" },
    );

    // FIX: If WordPress returns nothing, return default metadata
    if (!contentNode) {
      return { title: "Page Not Found" };
    }

    const metadata = setSeoData({ seo: contentNode.seo });

    return {
      ...metadata,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
      },
    } as Metadata;
  } catch (error) {
    // FIX: If API fails, return default metadata
    return { title: "Page Not Found" };
  }
}

export default async function NotFound() {
  try {
    const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
      id: notFoundPageWordPressId,
    });

    if (page?.content) {
       return <div dangerouslySetInnerHTML={{ __html: page.content }} />;
    }
  } catch (error) {
    console.warn("Custom 404 page not found in WordPress. Using default.");
  }

  // FIX: Fallback UI if WordPress data is missing
  return (
    <div style={{ padding: "100px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>Page not found</p>
      <Link href="/" style={{ textDecoration: "underline", color: "blue" }}>
        Return Home
      </Link>
    </div>
  );
}
