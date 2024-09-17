"use client";
import { useState } from "react";
import { Input } from "./input";

type PhoneFieldProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error: string | undefined;
};

const PhoneField = ({ value, onChange, onBlur, error }: PhoneFieldProps) => {
  const [codeVisibility, setCodeVisibility] = useState(false);
  const onChangeHandler = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    if (value.length < 10) onChange(numericValue);
  };
  const onBlurHandler = () => {
    onBlur();
    console.log(value);
    if (!value || value?.length == 0) setCodeVisibility(false);
  };
  return (
    <div>
      <div className="relative">
        <Input
          value={value || ""}
          onChange={(e) => onChangeHandler(e.target.value)}
          className={`rounded-sm ${codeVisibility ? "pl-12" : ""}`}
          placeholder="Номер телефону"
          pattern="[0-9]*"
          onFocus={() => setCodeVisibility(true)}
          onBlur={onBlurHandler}
          inputMode="numeric"
        />
        <p
          className={`absolute text-sm top-1/2 -translate-y-1/2 left-2 text-gray-600 ${
            codeVisibility ? "opacity-100" : "opacity-0"
          }`}
        >
          +380
        </p>
      </div>
      {error && (
        <p className="text-xs text-semibold text-red-600 mt-1 ml-2">{error}</p>
      )}
    </div>
  );
};

export default PhoneField;
