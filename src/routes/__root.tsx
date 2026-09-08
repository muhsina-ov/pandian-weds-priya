import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "R. Maharaja Pandian & S. Sathiya Priya | Wedding Invitation" },
      {
        name: "description",
        content:
          "With great joy, Mr. A.S. Raja Sekar & Mrs. R. Jeyakodi cordially invite you to the wedding celebrations of R. Maharaja Pandian & S. Sathiya Priya on 16 & 17 September 2026 at Durga Mahal and Sri Kailasanathar Temple, Pasuvanthanai.",
      },
      // Open Graph
      { property: "og:site_name", content: "Maharaja Pandian & Sathiya Priya Wedding" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pandian-weds-priya.vercel.app/" },
      {
        property: "og:title",
        content: "Maharaja Pandian & Sathiya Priya | Wedding Invitation",
      },
      {
        property: "og:description",
        content:
          "Main Function & Reception: Wednesday, 16th September 2026 (6:30 PM - 9:00 PM). Auspicious Muhurtham: Thursday, 17th September 2026 (7:31 AM - 9:00 AM) at Pasuvanthanai, Tamil Nadu.",
      },
      {
        property: "og:image",
        content: "https://pandian-weds-priya.vercel.app/og-image.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "R. Maharaja Pandian & S. Sathiya Priya Wedding Invitation Preview",
      },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Maharaja Pandian & Sathiya Priya | Wedding Invitation",
      },
      {
        name: "twitter:description",
        content:
          "Wedding celebrations on 16 & 17 September 2026 at Pasuvanthanai, Tamil Nadu. Reception & Muhurtham details.",
      },
      {
        name: "twitter:image",
        content: "https://pandian-weds-priya.vercel.app/og-image.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://pandian-weds-priya.vercel.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@300;400;500&family=Petit+Formal+Script&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
