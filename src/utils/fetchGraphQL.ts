// Next.js 16 Fix - Force Update
import { draftMode } from "next/headers";

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string },
): Promise<T> {
  // FIX: We added 'await' here
  const { isEnabled: preview } = await draftMode();

  try {
    let authHeader = "";
    if (preview) {
      // @ts-ignore
      const auth = (await import("next/headers")).cookies().get("wp_jwt")?.value;
      if (auth) {
        authHeader = `Bearer ${auth}`;
      }
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authHeader && { Authorization: authHeader }),
          ...headers,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        cache: preview ? "no-store" : "force-cache",
        next: {
          tags: ["wordpress"],
        },
      },
    );

    const json = await response.json();

    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch API");
  }
}
