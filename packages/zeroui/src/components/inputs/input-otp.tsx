"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InputOTPProps {
  length?: number;
  onComplete?: (otp: string) => void;
  className?: string;
  onChange?: (otp: string) => void;
}

export default function InputOTP({
  length = 6,
  onComplete,
  className,
  onChange,
}: InputOTPProps) {
  const [code, setCode] = useState<string[]>(new Array(length).fill(""));
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;

    // Only allow numbers
    if (isNaN(Number(val))) return;

    const newCode = [...code];
    // Handle pasting or multiple chars (take last char)
    newCode[index] = val.substring(val.length - 1);
    setCode(newCode);

    // Notify parent
    const otpValue = newCode.join("");
    onChange?.(otpValue);
    if (otpValue.length === length && !newCode.includes("")) {
      onComplete?.(otpValue);
    }

    // Move to next input if value is entered
    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Backspace logic
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        // If current is empty, move back and delete prev
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        inputRefs.current[index - 1]?.focus();
        setActiveInput(index - 1);
        onChange?.(newCode.join(""));
      } else {
        // Clear current
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        onChange?.(newCode.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").split("").filter(char => !isNaN(Number(char))).slice(0, length);

    if (pastedData.length > 0) {
      const newCode = [...code];
      const filledLength = Math.min(newCode.length, pastedData.length);

      for (let i = 0; i < filledLength; i++) {
        newCode[i] = pastedData[i];
      }

      setCode(newCode);
      const otpValue = newCode.join("");
      onChange?.(otpValue);
      if (otpValue.length === length) {
        onComplete?.(otpValue);
      }

      // Focus the slot after the last pasted char or the last slot
      const focusIndex = Math.min(filledLength, length - 1);
      inputRefs.current[focusIndex]?.focus();
      setActiveInput(focusIndex);
    }
  };

  return (
    <div className={cn("flex gap-2 items-center justify-center", className)}>
      {code.map((value, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el; }}
          type="text"
          inputMode="numeric" // Better mobile keyboard
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => setActiveInput(index)}
          onPaste={handlePaste}
          className={cn(
            "w-10 h-12 text-center text-xl font-semibold border-2 rounded-lg bg-white dark:bg-zinc-900 transition-all duration-200 outline-none caret-violet-500",
            activeInput === index
              ? "border-violet-500 ring-2 ring-violet-500/20 z-10 scale-105"
              : "border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700"
          )}
        />
      ))}
    </div>
  );
}
