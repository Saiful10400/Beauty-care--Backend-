
import axios from "axios";

const getPaymentUrl=async (cost:number,orderId:string,address:string) => {
    const transectionId=`TNX-${orderId}`
    const paymentObj = {
      store_id: process.env.STORE_ID,
      signature_key: process.env.SIGNATURE_KEY,
      cus_name: "Customer",
      cus_email: "Customer@g.com",
      cus_phone: "017400000",
      cus_add1: address,
      cus_add2: "",
      cus_city: "",
      cus_country: "",
      amount: cost,
      tran_id: transectionId,
      currency: "BDT",
      success_url: `https://deshi-mart-server.vercel.app/api/order/order-postProcess/${orderId}?transectonId=${transectionId}`,
      fail_url: `https://deshi-mart-server.vercel.app/api/order/order-postProcess/${orderId}?transectonId=${transectionId}`,
      cancel_url: "https://deshimart10400.vercel.app",
      desc: "Lend Money",
      type: "json",
    };
  const data=await axios.post("https://sandbox.aamarpay.com/jsonpost.php",paymentObj)
   
  
  if(data.data.result){
    return data.data.payment_url
  }
  
  
    // if(!res.data.result){
    //   throw new appError(httpStatus.BAD_REQUEST, res.data.errors[0]);
    // }
  
  };

export default getPaymentUrl