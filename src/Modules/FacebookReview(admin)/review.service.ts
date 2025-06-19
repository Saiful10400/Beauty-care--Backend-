// 1. create reveiw service

import { facebookReviewModel } from "./review.model";
import { TFacebookReview } from "./review.type";

const createFacebookREview = async (payload: TFacebookReview) => {
  const result = await facebookReviewModel.create(payload);
  return result;
};

//2. update review service
const updateFacebookReview = async (
  id: string,
  payload: Partial<TFacebookReview>
) => {
  const result = await facebookReviewModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

//3. get facebook reviews
const getFacebookReviews = async () => {
  const result = await facebookReviewModel.find();
  return result;
};

const facebooReviewService = {
  createFacebookREview,
  updateFacebookReview,
  getFacebookReviews,
};
export default facebooReviewService;
