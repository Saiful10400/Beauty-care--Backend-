export type TBanner = {
  _id?: string;
  title: string;
  imageUrl: string;
  isActive: boolean|string;
  type: "offer" | "page";
  asset: string;
};
