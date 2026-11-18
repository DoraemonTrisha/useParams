import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateProducts = () => {
    navigate("/products");
  };
  return (
    <>
      <button
        className="px-4 py-2 bg-slate-800 text-white text-xl"
        onClick={(e) => handleNavigateProducts(e)}
      >
        Go to products
      </button>
    </>
  );
};

export default Home;
