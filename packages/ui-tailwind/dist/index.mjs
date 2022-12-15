// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ text, onClick }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "text-xl font-bold rounded-md px-4 py-2 ml-2 bg-gradient-to-r from-brandred to-brandblue text-white",
      children: text
    }
  );
};
export {
  Button
};
