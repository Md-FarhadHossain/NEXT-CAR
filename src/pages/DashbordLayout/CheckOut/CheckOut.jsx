import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { UserContext } from "../../../context/AuthContext";


const CheckOut = ({data}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const {user} = useContext(UserContext)

  const stripe = useStripe();



  const elements = useElements();
  const {resalePrice,email} = data
  // console.log(data)


  const price = {
    price: data.resalePrice
  }
  useEffect(() => {
    console.log(price)
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(price),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    }  
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: email
          },
        },
      },
    );
    console.log(paymentIntent)
    if(confirmError){
      setError(confirmError.message)
      return;
    }


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p>{error ? error : " "}</p>
    </div>
  );
};

export default CheckOut;