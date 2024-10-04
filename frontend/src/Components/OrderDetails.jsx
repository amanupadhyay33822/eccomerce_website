import React from 'react'
import cart1 from "../asserts/images/cart1.png"
import cart2 from "../asserts/images/cart2.png"
import cart3 from "../asserts/images/cart3.png"
const OrderDetails = () => {


    const orderData = {
        orderCode: '#0123_45678',
        date: 'October 19, 2023',
        total: '$1,345.00',
        paymentMethod: 'Credit Card',
        items: [
            {
                id: 1,
                image: cart1,
                name: 'Tray Table',
                color: 'Black',
                quantity: 2,
                price: 19.19,
              },
              {
                id: 2,
                image: cart2,
                name: 'Tray Table',
                color: 'Red',
                quantity: 2,
                price: 19.19,
              },
              {
                id: 3,
                image: cart3,
                name: 'Table lamp',
                color: 'gold',
                quantity: 2,
                price: 39.00,
              },
        ]
      };

  return (
    <div className="bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-2xl w-[600px] mt-4 mb-6">
      <h2 className="text-2xl font-bold text-center mb-4">Thank you! 🎉</h2>
      <p className="text-center font-semibold text-3xl mb-4 w-72">Your order has been received.</p>
      <div className="flex justify-center gap-4">
        {orderData.items.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
            <p className="absolute top-[-10px] right-[-6px] bg-black text-white h-7 w-7 flex justify-center items-center rounded-full p-1 text-sm">{item.quantity}</p>
           </div>
        ))}
      </div>
      
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex">
            <span className="text-gray-500 w-40">Order Number:</span>
            <span className="font-bold">{orderData.orderCode}</span>
        </div>
        <div className="flex">
            <span className="text-gray-500 w-40">Date:</span>
            <span>{orderData.date}</span>
        </div>
        <div className="flex">
            <span className="text-gray-500 w-40">Total:</span>
            <span className="font-bold">{orderData.total}</span>
        </div>
        <div className="flex">
            <span className="text-gray-500 w-40">Payment Method:</span>
            <span className="font-bold">{orderData.paymentMethod}</span>
        </div>
      </div>



     
      <div className="flex justify-center mt-4">
        <button className="bg-black text-white px-6 py-3 rounded-full">
          Purchase history
        </button>
      </div>
    </div>
  )
}

export default OrderDetails