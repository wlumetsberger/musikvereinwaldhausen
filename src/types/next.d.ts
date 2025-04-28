// Override built-in Next.js types for static export

declare module "next" {
  // Direct override of PageProps to make it compatible with static export
  export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }

  // Override the metadata context types
  export interface GenerateMetadataContext {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}