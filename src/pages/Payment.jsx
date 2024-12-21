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
    <div className="h-screen font-ruddy flex flex-col bg-bg-light items-center py-20 gap-y-20 px-20 w-full">
        <aside className='text-primary-dark font-ruddy self-start justify-self-start '>
            <h1 className='text-primary-dark font-ruddy text-7xl font-bold '>AnimeCon</h1>
            <p className='text-6xl'>Hubli</p>
        </aside>
        <main className="flex items-end">
            <article className="text-left mr-24 space-y-8 text-2xl">
                <p><b>Non-Refundable Payments:</b> All ticket purchases are final and non-refundable, except in the event of event cancellation</p>
                <p><b>Payment Confirmation:</b> Your ticket is confirmed only after full payment is successfully processed</p>
                <p><b>Resale Prohibited:</b> Tickets are non-transferable and cannot be resold or exchanged</p>
                <p><b>Liability:</b> The event organizers are not responsible for lost or stolen items or any technical payment issues beyond our control.</p>
            </article>
        
            <section className="relative flex flex-col w-60 space-y-6">
                <aside className="flex flex-col items-end text-2xl space-y-2">
                    <b className=" text-nowrap">Total Price</b>
                    <b >1200 Rs</b>
                </aside>
                <button
                    className="bg-black font-bold text-white py-3 px-4 pr-10 -skew-x-12 -rotate-3 z-10 transition-all ease-linear"
                    onClick={() => razorpayHandler()}
                >
                    Pay now
                </button>
                <button className="absolute -bottom-1 -right-2.5 left-0 bg-secondary font-bold text-white py-3 px-4 pr-10 transition-all ease-linear -skew-x-12 -rotate-2">Pay!</button>
            </section>
        </main>
    </div>
  )
}

export { Payment }
