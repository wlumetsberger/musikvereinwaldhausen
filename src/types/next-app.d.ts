// This extends the Next.js types for static export compatibility

declare module 'next' {
  // Define the correct PageProps interface that works with static export
  export interface StaticPageProps {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }

  // Make sure generateMetadata has the right type signature
  export interface StaticGenerateMetadataContext {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}

// Add global type for dynamic route page components
declare global {
  type DynamicRouteParams<T extends Record<string, string> = Record<string, string>> = {
    params: T;
    searchParams?: Record<string, string | string[]>;
  };
}