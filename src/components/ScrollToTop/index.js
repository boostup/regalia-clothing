/**
 * Issue #33: Restoring Scroll to Top
 * https://github.com/boostup/regalia-clothing/issues/33#issuecomment-715297626
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // catching 2nd-level paths i.e. `/shop/hats`
    // refer to the issue to understand this
    const replacedPathname = pathname.replace(/\//g, "");
    if (replacedPathname.length === pathname.length - 2) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};
