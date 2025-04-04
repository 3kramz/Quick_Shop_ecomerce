import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { FiRefreshCcw } from "react-icons/fi";

const CartActions = () => (
  <div className="flex justify-between mt-8">
    <button className="btn btn-success btn-hover border-0 px-4 py-2 rounded flex items-center text-white">
      <HiArrowLeft /> Continue Shopping
    </button>
    <button className="btn btn-success btn-hover border-0 px-4 py-2 rounded flex items-center text-white">
      <FiRefreshCcw /> Update Cart
    </button>
  </div>
);

export default CartActions;
