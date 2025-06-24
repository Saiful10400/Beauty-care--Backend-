export type Tgeneral = {
  siteName: string;
  logoUrl: string;
  contactEmail: string;
  phone: string;
  address: string;
  aboutUs: string;
  socialLinks: { facebook: string; instagram: string };

  // offer related.
  freeGift: { product: string; buyAbove: number; applicable: boolean };
};
