import React from "react";
import { useState } from "react";

const InputBox = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`relative bg-[#e9ebf0]  p-3   rounded-lg border-b-[3px] w-full 
      focus:border-black
      focus:outline-none
      ${focus ? "border-black" : ""}
      ${focus ? "hover:border-black" : "hover:border-[#9d9b9b]"}
      `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <input
        type="email"
        onFocus={() => setShowPlaceholder(true)}
        onBlur={() => setShowPlaceholder(false)}
        className="bg-[#e9ebf0] w-full  rounded-lg focus:outline-none 
                          "
      />
      <label
        className={`text-[#5f6166]  absolute duration-300 top-3 left-3 
                            ${
                              showPlaceholder
                                ? "top-1 left-3 text-[11px]"
                                : "top-3 left-3"
                            }
                            `}
      >
        Email
      </label>
    </div>
  );
};

export default InputBox;
