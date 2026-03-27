// Base interface for domain items
export interface DomainItem {
  id: number;
  desc: string;
}

// Generic type that accepts dynamic domain keys
export type LookupPayload<T extends readonly string[]> = {
  [K in T[number]]: DomainItem[];
};

// Alternative approach using index signature for more flexible usage
export type DynamicLookupPayload = {
  [key: string]: DomainItem[];
};

// Union type for all CG reference code domains
export type CGRefCodesDomain = '';