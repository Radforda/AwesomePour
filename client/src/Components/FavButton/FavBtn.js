import React from "react";
import "./FavBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const FavBtn = props => (
  <span className="fav-btn" {...props}>
    <img id="btn" src="../images/fav-mark.jpg"></img>
  </span>
);

export default FavBtn;
