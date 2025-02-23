import React from 'react'

const PaymentPage = ({clickHandler}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <button
        className="bg-gradient-to-r from-[#407bff] to-[#f90707] text-white py-2 px-4 rounded-xl"
        onClick={() => clickHandler()}
      >
        Pay!
      </button>
    </div>
  )
}

export default PaymentPage