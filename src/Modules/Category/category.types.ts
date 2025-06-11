// Single Category
export type tCategory = {
  name: string; // Category name
  slug: string; // URL-friendly identifier
  description?: string; // Optional category description
  imageUrl?: string; // Optional category image
  isFeatured?: boolean; // Highlighted category
};

export default tCategory;
