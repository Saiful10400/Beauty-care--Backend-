export type TProduct = {
  name: string; // Product name
  slug: string; // URL-friendly name
  description?: string; // Full product description
  shortDescription?: string; // Optional short summary
  brandId: string; // Reference to brand
  categoryIds: string; // Reference to category
  price: number; // Base price
  discountPrice?: number; // Optional discounted price
  inStock: boolean; // Inventory status
  images: string[]; // Image URLs
  tags?: string[]; // Optional tags
  rating?: number; // Average customer rating;
  gender: "male" | "female";
  haveOffer: boolean;
};

export default TProduct;
