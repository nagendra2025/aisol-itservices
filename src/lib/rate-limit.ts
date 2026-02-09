// Simple in-memory rate limiting (for Phase 1)
// In production, consider using Redis or a more robust solution

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 requests per window

export function rateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = store[identifier];

  // Clean up expired entries
  if (record && now > record.resetTime) {
    delete store[identifier];
  }

  const current = store[identifier];

  if (!current) {
    store[identifier] = {
      count: 1,
      resetTime: now + WINDOW_MS,
    };
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  current.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - current.count };
}

// Helper to get client IP (simplified for Phase 1)
export function getClientIdentifier(headers: Headers): string {
  // In production, use proper IP extraction with X-Forwarded-For handling
  const forwarded = headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}





