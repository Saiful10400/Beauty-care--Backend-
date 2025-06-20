// 1. create reveiw service

import { facebookReviewModel } from "./review.model";
import { TFacebookReview } from "./review.type";

const createFacebookREview = async (payload: TFacebookReview) => {
  const result = await facebookReviewModel.create(payload);
  return result;
};

//2. update review service
const deleteFacebookReview = async (id: string) => {
  const result = await facebookReviewModel.findByIdAndDelete(id);
  return result;
};

//3. get facebook reviews
const getFacebookReviews = async () => {
  const result = await facebookReviewModel.find();
  return result;
};

const facebooReviewService = {
  createFacebookREview,
  deleteFacebookReview,
  getFacebookReviews,
};
export default facebooReviewService;
