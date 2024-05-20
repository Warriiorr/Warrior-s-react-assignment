import React from "react";
import "./button.css";

const Button = ({ name, color, size, isDisabled }) => {
  return (
    <button
      className={`button ${color ? color : ""} ${size ? size : ""} ${
        isDisabled ? "disabled" : ""
      }`}
      type="submit"
      disabled={isDisabled}
    >
      {name ? name : "submit"}
    </button>
  );
};

export default Button;
