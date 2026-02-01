"use client";

import React, { useRef, useState } from "react";
import { Upload, X, File, FileType } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  onFileSelect?: (file: File | null) => void;
  accept?: string;
}

export default function InputFile({
  className,
  label,
  helperText,
  onFileSelect,
  accept,
  ...props
}: InputFileProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelect?.(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  // Trigger input click
  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100">
          {label}
        </label>
      )}

      <div
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer overflow-hidden",
          dragActive
            ? "border-violet-500 bg-violet-50 dark:bg-violet-900/10"
            : "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={handleChange}
          {...props}
        />

        {selectedFile ? (
          <div className="flex flex-col items-center p-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-2 text-violet-600 dark:text-violet-400">
              <File className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 text-center truncate max-w-[200px]">
              {selectedFile.name}
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
            <button
              onClick={removeFile}
              className="absolute top-2 right-2 p-1 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center mb-3 text-zinc-500">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              {accept ? `Accepted formats: ${accept}` : "All files accepted"}
            </p>
          </div>
        )}
      </div>

      {helperText && !selectedFile && (
        <p className="text-xs text-zinc-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
