export type TComboOffer = {
  name: string; // Product name
  slug: string; // URL-friendly name
  description?: string; // Full product description
  shortDescription?: string; // Optional short summary
  brandsId: string[]; // Reference to brand
  categoryIds: string[]; // Reference to category
  price: number; // Base price
  discountPrice?: number; // Optional discounted price
  inStock: boolean; // Inventory status
  images: string[]; // Image URLs
  rating?: number; // Average customer rating;
  isComboOffer: boolean;
};

export default TComboOffer;
