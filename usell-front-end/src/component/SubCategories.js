import React from "react";
import "./SubCategories.css";
const SubCategories = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  goToTop();
  return (
    <div>
      <label>SubCategories</label>
    </div>
  );
};

export default SubCategories;
