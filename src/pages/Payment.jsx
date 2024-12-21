import { useEffect } from "react"

const Payment = ({ amount }) => {
  console.log("LOG", amount)
  const checkoutHandler = () => {
    var option = {
      key: "rzp_test_gZUyFL8iSOmzRO",
      key_secret: "NhxYofCc6J74MYtxV4N736G8",
      amount: amount * 100,
      currency: "INR",
      name: "Client Name",
      description: "Checkout for Merch",
      handler: function () {
        const script = document.querySelector(
          'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
        )
        if (script) {
          document.body.removeChild(script)
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
    }

    var pay = new window.Razorpay(option)
    pay.open()
  }
  const razorpayHandler = () => {
    const loadRazorpay = async () => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      script.onload = () => {
        // Razorpay script loaded, now call the checkoutHandler
        checkoutHandler()
      }
      document.body.appendChild(script)
    }

    loadRazorpay()
  }

  useEffect(() => {
    // Clean up function to remove the script when the component unmounts
    return () => {
      // Remove the script if it exists
      const script = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      )
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <button
        className="bg-gradient-to-r from-[#407bff] to-[#f90707] text-white py-2 px-4 rounded-xl"
        onClick={() => razorpayHandler()}
      >
        Pay!
      </button>
    </div>
  )
}

export { Payment }
