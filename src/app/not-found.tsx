import type { Metadata } from "next";
import React from "react";
import { assetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background text-foreground">
      <h1 className="text-7xl font-bold font-display mb-4 text-primary">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for doesn't exist or may have been moved.
      </p>
      <a
        href={assetUrl("/")}
        className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all shadow-lg"
      >
        Return to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
