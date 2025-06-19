export type TFacebookReview = {
  customerName: string; // Name of the reviewer
  profileImageUrl?: string; // (Optional) Facebook profile picture URL
  message: string; // The review text
  reviewDate: string; // When the review was posted (ISO string)
  isVisible: boolean; // Control display on site
};
