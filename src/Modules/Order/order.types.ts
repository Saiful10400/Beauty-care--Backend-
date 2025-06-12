export type TOrder = {
  customerName: string; // Full name of the customer
  customerPhone: string; // Phone number for confirmation
  customerAddress: string; // Delivery address

  products: {
    productId: string; // Reference to Product (Product._id)
    quantity: number; // Quantity ordered
    price: number; // Unit price at time of ordering
  }[];

  totalAmount: number; // Total cost of the order
  paymentMethod: "COD"; // Currently only Cash on Delivery
  isConfirmed: boolean; // Confirmed by admin after phone call
  isShipped: boolean; // Has the order been sent to courier?
  createdAt: Date; // When the order was created
};
export default TOrder;