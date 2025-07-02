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

// get all order
const getAllOrder = async () => {
  const result = await orderModel.find().sort({ _id: -1 });
  return {
    result,
    total: await orderModel.countDocuments(),
  };
};

// delete order.
const deleteOrder=async(id:string)=>{
  const result=await orderModel.findByIdAndDelete(id)
  return result
}

// update one order.
const updateOrder = async (id: string, payload: TOrder) => {
 
  const result = await orderModel.findByIdAndUpdate(id, payload);
  return result;
};

const orderService = {
  createOrder,
  getOrderById,
  getAllOrder,
  updateOrder,
  deleteOrder
};
export default orderService;
