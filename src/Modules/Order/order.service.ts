import orderModel from "./order.model";
import TOrder from "./order.types";

// create a order.
const createOrder = async (payload: TOrder) => {
  const result = await orderModel.create(payload);
  return result;
};

// get a order by id.
const getOrderById = async (id: string) => {
  const result = await orderModel.findById(id);
  return result;
};

const orderService = {
  createOrder,
  getOrderById,
};
export default orderService;
