/**
 * Issue #33: Restoring Scroll to Top
 * https://github.com/boostup/regalia-clothing/issues/33#issuecomment-715297626
 */
import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const handleClick = async (e) => {
    window.scrollTo(0, 0);
  };

  return <Link {...props} onClick={handleClick}></Link>;
};
