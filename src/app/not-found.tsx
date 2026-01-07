// FIX: Crash-Proof 404 Page
import type { Metadata } from "next";
import { print } from "graphql/language/printer";
import Link from "next/link";

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
  } catch (e) {
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
  } catch (e) {
    // Ignore error and show default
  }

  return (
    <div style={{ padding: "100px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" style={{ textDecoration: "underline", color: "blue" }}>
        Go Home
      </Link>
    </div>
  );
}
