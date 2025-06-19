export type TBanner = {
  _id?: string;
  title: string;
  imageUrl: string;
  isActive: boolean;
  type: "offer" | "page";
  asset: string;
};
