// Single Brand
export interface Tbrand {
  id: string; // Unique identifier
  name: string; // Brand name
  description?: string; // Optional brand description
  logoUrl?: string; // Optional logo image
  websiteUrl?: string; // Optional external link
  isFeatured?: boolean; // For featured brand sections
}
