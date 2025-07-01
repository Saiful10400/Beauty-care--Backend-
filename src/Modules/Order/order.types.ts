export type TorderProduct = {
  productId: string;
  name: string;
  price: number; // single price
  quantity: number;
  imageUrl: string;
  haveOffer: boolean;
};

export type TOrder = {
  customerName: string; // Full name of the customer
  customerPhone: string; // Phone number for confirmation
  customerAddress: string; // Delivery address

  products: TorderProduct[];

  totalAmount: number; // Total cost of the product
  paymentMethod: "COD"; // Currently only Cash on Delivery
  deliveryCharge: number; // Currently only Cash on Delivery
  isConfirmed: boolean; // Confirmed by admin after phone call
  isShipped: boolean; // Has the order been sent to courier?
  freeGiftEligible:boolean;
  giftProduct?:string
 
};
export default TOrder; 
