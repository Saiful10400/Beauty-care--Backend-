import { Router } from "express";
import generalRouter from "../Modules/General/general.routes";
import brandRouter from "../Modules/Brand/brand.routes";
import categoryRouter from "../Modules/Category/catogory.routes";
import productRouter from "../Modules/Product/product.routes";
import orderRouter from "../Modules/Order/order.routes";
import bannerRoute from "../Modules/Banner/banner.routes";
import facebookReviewRoute from "../Modules/FacebookReview(admin)/review.route";
import comboOfferRoute from "../Modules/Offer.Combo/offer.routes";

const routes = Router();

const moduleRoutes = [
  {
    path: "/general",
    route: generalRouter,
  },
  {
    path: "/brand",
    route: brandRouter,
  },
  {
    path: "/category",
    route: categoryRouter,
  },
  {
    path: "/product",
    route: productRouter,
  },
  {
    path: "/order",
    route: orderRouter,
  },
  {
    path: "/banner",
    route: bannerRoute,
  },
  {
    path: "/facebook-review",
    route: facebookReviewRoute,
  },
  {
    path: "/comboOffer",
    route: comboOfferRoute,
  },
];

moduleRoutes.forEach((item) => routes.use(item.path, item.route));

export default routes;
