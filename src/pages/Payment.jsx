"use client";
import React, { useEffect, useState } from "react";

const BuyButton = ({ amount, setShowSuperModal }) => {
  const checkoutHandler = () => {
    var option = {
      key: "rzp_test_gZUyFL8iSOmzRO",
      key_secret: "NhxYofCc6J74MYtxV4N736G8",
      amount: amount * 100,
      currency: "INR",
      name: "Client Name",
      description: "Checkout for Merch",
      handler: function (response) {
        setShowSuperModal(false); // Close modal on successful payment
        const script = document.querySelector(
          'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
        );
        if (script) {
          document.body.removeChild(script);
        }
      },
      prefill: {
        name: "Company Name",
        email: "CompanyEmail@gmail.com",
        contact: "9320003121",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(option);
    pay.open();
  };
  const razorpayHandler = () => {
    const loadRazorpay = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        // Razorpay script loaded, now call the checkoutHandler
        checkoutHandler();
      };
      document.body.appendChild(script);
    };

    loadRazorpay();
  };

  useEffect(() => {
    // Clean up function to remove the script when the component unmounts
    return () => {
      // Remove the script if it exists
      const script = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [setShowSuperModal]);
  return (
    <button
      className="bg-gradient-to-r from-[#407bff] to-[#f90707] text-white py-2 px-4 rounded-xl"
      onClick={() => razorpayHandler()}
    >
      Pay!
    </button>
  );
};
const Payment = ({ setShowSuperModal }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-40 bg-black/30 flex justify-center items-center">
      <main className="p-4 rounded-xl border w-1/3 bg-white space-y-3">
        <h1 className="text-2xl font-medium text-center">
          Buy a <span className="gradient-text">SuperStar</span> for John!
        </h1>
        <aside className="flex space-x-1.5 items-center">
          <b>Tip:</b>{" "}
          <input
            type={"number"}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="bg-white border border-black w-16 appearance-none"
            style={{ "-moz-appearance": "textfield" }}
          />{" "}
          <small>INR</small>
        </aside>
        <textarea
          placeholder="Comment"
          className=" p-4 outline-none border resize-none rounded-3xl bg-bg text-black text-2xl w-full"
        />
        <section className="flex justify-between">
          <button
            className="bg-black text-white rounded-md px-3 py-1"
            onClick={() => setShowReviewModal(false)}
          >
            Cancel
          </button>
          <BuyButton amount={amount} setShowSuperModal={setShowSuperModal} />
        </section>
      </main>
    </div>
  );
};
export default Payment;
