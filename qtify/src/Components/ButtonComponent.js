import React from "react";
const Button = ({text}) => {
  return (
    <div className="btn">
      <button className="Feedback-btn" type="text">
        {text}
      </button>
    </div>
  );
};
export default Button;
