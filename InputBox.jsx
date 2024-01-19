import React, { useState } from "react";

// Define the InputBox component
const InputBox = ({ placeholderText }) => {
  // State to manage focus and placeholder display
  const [focus, setFocus] = useState(false);

  // CSS classes for styling
  const inputBoxFullStyles =
    "relative bg-[#e9ebf0] p-3 rounded-lg border-b-[3px] w-full focus:border-black focus:outline-none";
  const inputBoxStyles =
    "bg-[#e9ebf0] w-full rounded-lg focus:outline-none";

  // Event handlers for focus and blur
  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div
      className={`${inputBoxFullStyles} ${
        focus ? "border-black hover:border-black" : "hover:border-[#9d9b9b]"
      }`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Input field */}
      <input
        type="email"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputBoxStyles}
      />

      {/* Placeholder animation */}
      <label
        className={`text-[#5f6166] absolute duration-300 top-${
          focus ? "1" : "3"
        } left-3 ${focus ? "text-[11px]" : ""}`}
      >
        {placeholderText}
      </label>
    </div>
  );
};

export default InputBox;
