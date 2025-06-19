import bannerModel from "./banner.model";
import { TBanner } from "./banner.types";

// create a banner.
const createBanner = async (payload: TBanner) => {
  const result = await bannerModel.create(payload);
  return result;
};

// update a banner by id.
const updateBanner = async (id: string, payload: Partial<TBanner>) => {
  const result = await bannerModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const bannerService = {
  createBanner,
  updateBanner,
};
export default bannerService;
