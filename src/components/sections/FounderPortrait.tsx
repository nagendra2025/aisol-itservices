"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Add `public/images/founder.jpg` (e.g. save your LinkedIn profile photo locally). LinkedIn URLs are not stable for hotlinking. */
const FOUNDER_IMAGE_PATH = "/images/founder.jpg";

function FounderSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="64" cy="64" r="64" className="fill-muted" />
      <circle cx="64" cy="50" r="22" className="fill-muted-foreground/35" />
      <path
        d="M24 118c4-28 28-48 40-48s36 20 40 48"
        className="fill-muted-foreground/35"
      />
    </svg>
  );
}

export function FounderPortrait() {
  const [photoReady, setPhotoReady] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(FOUNDER_IMAGE_PATH, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setPhotoReady(res.ok);
      })
      .catch(() => {
        if (!cancelled) setPhotoReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (photoReady === null) {
    return (
      <div
        className="mx-auto mb-6 h-40 w-40 shrink-0 animate-pulse rounded-full border-2 border-border bg-muted/60 ring-2 ring-primary/5 ring-offset-2 ring-offset-card"
        aria-hidden
      />
    );
  }

  if (!photoReady) {
    return (
      <div
        className="mx-auto mb-6 flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-card shadow-sm ring-2 ring-primary/10 ring-offset-2 ring-offset-card"
        role="img"
        aria-label="Founder photo placeholder"
      >
        <FounderSilhouette className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto mb-6 h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted shadow-sm ring-2 ring-primary/10 ring-offset-2 ring-offset-card">
      <Image
        src={FOUNDER_IMAGE_PATH}
        alt="Nagendra Kumar Adapala, Director, AISOL IT Services Inc."
        width={160}
        height={160}
        className="h-full w-full object-cover object-top"
        sizes="160px"
        priority={false}
      />
    </div>
  );
}
