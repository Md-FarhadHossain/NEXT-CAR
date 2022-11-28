import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <Elements stripe={stripePromise}>
      <CheckOut data={data} />
    </Elements>
  );
};

export default Payment;
