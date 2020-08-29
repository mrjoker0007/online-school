import React from "react";
import "./Shop.css";
import fakeData from "../../fakeData/courses";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [courseList,] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleEnrollNow = (item) => {
    const newcart = [...cart, item];
    setCart(newcart);
    const enrollButton = document.getElementById(item.id);
    enrollButton.innerText = "Enrolled";
    enrollButton.style.backgroundColor = "green";
    enrollButton.disabled = true;
  };

  return (
    <div className="shop-content row ">
      <div className="courses d-flex col-8 flex-wrap">
        {courseList.map((course) => (
          <Course
            handleEnrollNow={() => {
              handleEnrollNow(course);
            }}
            course={course}
            key={course.id}
          ></Course>
        ))}
      </div>

      <div className="cart d-flex flex-column align-items-center col-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
