"use client";

import {
  ComponentPageLayout,
  ComponentPreview,
  InstallationTabs,
  PropsTable,
} from "@/components/component-page";
import { Check, X, FileText, Upload, CloudUpload, Image, FileCode, FileArchive, Film, Music, File } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";

const featuredComponents = [
  { id: "profile-cards", name: "Profile Cards", href: "/featured/profile-cards" },
  { id: "music-cards", name: "Music Cards", href: "/featured/music-cards" },
  { id: "calendar", name: "Calendar", href: "/featured/calendar" },
  { id: "wallet", name: "Wallet", href: "/featured/wallet" },
  { id: "ai-input", name: "AI Input", href: "/featured/ai-input" },
  { id: "github-calendar", name: "Github Calendar", href: "/featured/github-calendar" },
  { id: "otp-input", name: "OTP Input", href: "/featured/otp-input" },
  { id: "priority-cards", name: "Priority Cards", href: "/featured/priority-cards" },
  { id: "upload-card", name: "Upload Card", href: "/featured/upload-card" },
  { id: "navbars", name: "Navbars", href: "/featured/navbars" },
];

const manualSteps = [
  {
    title: "Copy the component code",
    description: "Create a new file and paste the following code:",
    filename: "components/featured/upload-card.tsx",
    code: `"use client";

import React from "react";
import { Check, X, FileText } from "lucide-react";

interface UploadCardProps {
  filename: string;
  progress: number;
  currentSize: string;
  totalSize: string;
  status?: "uploading" | "completed" | "error";
  fileType?: "pdf" | "doc" | "image" | "video";
}

export default function UploadCard({
  filename,
  progress,
  currentSize,
  totalSize,
  status = "uploading",
  fileType = "pdf",
}: UploadCardProps) {
  // Component implementation...
}`,
  },
];

// PDF Icon Component
function PDFIcon() {
  return (
    <div className="w-12 h-14 relative">
      {/* Document shape */}
      <div className="absolute inset-0 bg-zinc-100 rounded-lg border border-zinc-200 overflow-hidden">
        {/* Folded corner */}
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-zinc-50"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
      </div>
      {/* PDF badge */}
      <div className="absolute bottom-1 left-1 right-1 bg-red-500 rounded text-white text-[8px] font-bold text-center py-0.5">
        PDF
      </div>
    </div>
  );
}

function UploadCard({
  filename,
  progress,
  currentSize,
  totalSize,
  status = "uploading",
}: {
  filename: string;
  progress: number;
  currentSize: string;
  totalSize: string;
  status?: "uploading" | "completed" | "error";
}) {
  const isCompleted = status === "completed" || progress >= 100;

  // Progress bar colors based on progress
  const getProgressColor = () => {
    if (isCompleted) return "bg-green-500";
    if (progress < 30) return "bg-red-400";
    if (progress < 70) return "bg-orange-400";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl p-4 shadow-sm border border-zinc-100">
      <div className="flex items-start gap-4">
        {/* File Icon */}
        <PDFIcon />

        {/* File Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-medium text-zinc-900 truncate pr-2">{filename}</h4>
            {!isCompleted ? (
              <span className="text-sm font-medium text-zinc-500">{progress}%</span>
            ) : (
              <div className="flex items-center gap-1 text-green-600">
                <Check size={16} />
                <span className="text-sm font-medium">Completed</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Size Info */}
          <p className="text-xs text-zinc-400">
            {currentSize} of {totalSize}
          </p>

          {/* Action Buttons (only show when completed) */}
          {isCompleted && (
            <div className="flex gap-2 mt-3">
              <button className="px-4 py-1.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors">
                Change
              </button>
              <button className="px-4 py-1.5 text-sm font-medium text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Interactive Upload Dropzone
interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: "uploading" | "completed" | "error";
}

function UploadDropzone() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = useCallback((uploadFile: UploadFile) => {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.id === uploadFile.id && f.status === "uploading") {
            const newProgress = Math.min(f.progress + Math.random() * 15, 100);
            return {
              ...f,
              progress: newProgress,
              status: newProgress >= 100 ? "completed" : "uploading",
            };
          }
          return f;
        })
      );
    }, 200);

    setTimeout(() => clearInterval(interval), 5000);
  }, []);

  const handleFiles = useCallback(
    (newFiles: FileList | null) => {
      if (!newFiles) return;

      const uploadFiles: UploadFile[] = Array.from(newFiles).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        progress: 0,
        status: "uploading" as const,
      }));

      setFiles((prev) => [...prev, ...uploadFiles]);
      uploadFiles.forEach(simulateUpload);
    },
    [simulateUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileTypeInfo = (filename: string) => {
    const ext = filename.split(".").pop()?.toLowerCase() || "";

    // Images
    if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp", "ico"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-emerald-500", icon: Image };
    }
    // Videos
    if (["mp4", "mov", "avi", "mkv", "webm", "flv"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-purple-500", icon: Film };
    }
    // Audio
    if (["mp3", "wav", "ogg", "flac", "aac", "m4a"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-pink-500", icon: Music };
    }
    // Code/Text
    if (["js", "ts", "jsx", "tsx", "html", "css", "json", "py", "java", "cpp", "c", "go", "rs"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-yellow-500", icon: FileCode };
    }
    // Archives
    if (["zip", "rar", "7z", "tar", "gz"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-amber-600", icon: FileArchive };
    }
    // Documents
    if (["pdf"].includes(ext)) {
      return { label: "PDF", color: "bg-red-500", icon: FileText };
    }
    if (["doc", "docx"].includes(ext)) {
      return { label: "DOC", color: "bg-blue-500", icon: FileText };
    }
    if (["xls", "xlsx"].includes(ext)) {
      return { label: "XLS", color: "bg-green-600", icon: FileText };
    }
    if (["ppt", "pptx"].includes(ext)) {
      return { label: "PPT", color: "bg-orange-500", icon: FileText };
    }
    if (["txt", "md"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-zinc-500", icon: FileText };
    }
    // Executables
    if (["exe", "msi", "dmg", "app"].includes(ext)) {
      return { label: ext.toUpperCase(), color: "bg-slate-700", icon: File };
    }
    // Default
    return { label: ext.toUpperCase() || "FILE", color: "bg-zinc-400", icon: File };
  };

  return (
    <div className="w-full max-w-lg">
      {/* Dropzone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer
          transition-all duration-200
          ${
            isDragging
              ? "border-violet-500 bg-violet-500/10"
              : "border-zinc-300 dark:border-zinc-700 hover:border-violet-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <CloudUpload
          size={40}
          className={`mx-auto mb-3 ${isDragging ? "text-violet-500" : "text-zinc-400"}`}
        />
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {isDragging ? "Drop files here" : "Drag & drop files here"}
        </p>
        <p className="text-xs text-zinc-500 mt-1">or click to browse</p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 space-y-3">
          {files.map((uploadFile) => {
            const isCompleted = uploadFile.status === "completed";
            const progress = uploadFile.progress;
            const fileInfo = getFileTypeInfo(uploadFile.file.name);
            const FileIcon = fileInfo.icon;

            const getProgressColor = () => {
              if (isCompleted) return "bg-green-500";
              if (progress < 30) return "bg-red-400";
              if (progress < 70) return "bg-orange-400";
              return "bg-green-500";
            };

            return (
              <div
                key={uploadFile.id}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-zinc-100"
              >
                <div className="flex items-start gap-4">
                  {/* File Icon */}
                  <div className="w-12 h-14 relative shrink-0">
                    <div className="absolute inset-0 bg-zinc-100 rounded-lg border border-zinc-200 flex items-center justify-center overflow-hidden">
                      <FileIcon size={20} className="text-zinc-400 -mt-2" />
                      <div
                        className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-zinc-50 dark:bg-zinc-200"
                        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                      />
                    </div>
                    <div className={`absolute bottom-1 left-1 right-1 ${fileInfo.color} rounded text-white text-[8px] font-bold text-center py-0.5`}>
                      {fileInfo.label}
                    </div>
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-zinc-900 truncate pr-2">
                        {uploadFile.file.name}
                      </h4>
                      {!isCompleted ? (
                        <span className="text-sm font-medium text-zinc-500">
                          {Math.round(progress)}%
                        </span>
                      ) : (
                        <div className="flex items-center gap-1 text-green-600">
                          <Check size={16} />
                          <span className="text-sm font-medium">Completed</span>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>

                    {/* Size Info */}
                    <p className="text-xs text-zinc-400">
                      {formatFileSize(uploadFile.file.size * (progress / 100))} of {formatFileSize(uploadFile.file.size)}
                    </p>

                    {/* Action Buttons */}
                    {isCompleted && (
                      <div className="flex gap-2 mt-3">
                        <button className="px-4 py-1.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors">
                          Change
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(uploadFile.id);
                          }}
                          className="px-4 py-1.5 text-sm font-medium text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function UploadCardCompact({
  filename,
  progress,
  status = "uploading",
}: {
  filename: string;
  progress: number;
  status?: "uploading" | "completed" | "error";
}) {
  const isCompleted = status === "completed" || progress >= 100;

  return (
    <div className="w-full max-w-sm bg-zinc-900 rounded-xl p-3 flex items-center gap-3">
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
        <FileText size={20} className="text-red-500" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white truncate">{filename}</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${isCompleted ? "bg-green-500" : "bg-violet-500"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-zinc-400">{progress}%</span>
        </div>
      </div>

      {/* Close button */}
      <button className="w-8 h-8 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors">
        <X size={16} className="text-zinc-400" />
      </button>
    </div>
  );
}

export default function UploadCardPage() {
  return (
    <ComponentPageLayout
      componentName="Upload Card"
      description="File upload progress cards with status indicators and action buttons."
      componentItems={featuredComponents}
      activeComponentId="upload-card"
      prevComponent={{ name: "Priority Cards", href: "/featured/priority-cards" }}
      nextComponent={{ name: "Navbars", href: "/featured/navbars" }}
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Interactive Dropzone</h3>
      <ComponentPreview
        code={`<UploadDropzone />`}
      >
        <div className="flex items-center justify-center p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900/50">
          <UploadDropzone />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Upload Progress States</h3>
      <ComponentPreview
        code={`<UploadCard filename="2024-my-portfolio.pdf" progress={20} currentSize="3.2 MB" totalSize="12.8 MB" />
<UploadCard filename="2024-my-portfolio.pdf" progress={60} currentSize="9.6 MB" totalSize="12.8 MB" />
<UploadCard filename="2024-my-portfolio.pdf" progress={100} currentSize="12.8 MB" totalSize="12.8 MB" status="completed" />`}
      >
        <div
          className="flex flex-col gap-4 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <UploadCard
            filename="2024-my-portfolio.pdf"
            progress={20}
            currentSize="3.2 MB"
            totalSize="12.8 MB"
          />
          <UploadCard
            filename="2024-my-portfolio.pdf"
            progress={60}
            currentSize="9.6 MB"
            totalSize="12.8 MB"
          />
          <UploadCard
            filename="2024-my-portfolio.pdf"
            progress={100}
            currentSize="12.8 MB"
            totalSize="12.8 MB"
            status="completed"
          />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Compact Dark Style</h3>
      <ComponentPreview
        code={`<UploadCardCompact filename="presentation.pdf" progress={45} />
<UploadCardCompact filename="design-assets.zip" progress={100} status="completed" />`}
      >
        <div
          className="flex flex-col gap-3 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <UploadCardCompact filename="presentation.pdf" progress={45} />
          <UploadCardCompact filename="design-assets.zip" progress={100} status="completed" />
        </div>
      </ComponentPreview>

      <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Multiple Files</h3>
      <ComponentPreview
        code={`<UploadCard filename="document.pdf" progress={85} ... />
<UploadCard filename="image.png" progress={30} ... />`}
      >
        <div
          className="flex flex-col gap-4 items-center justify-center p-8 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <UploadCard
            filename="project-proposal.pdf"
            progress={85}
            currentSize="4.2 MB"
            totalSize="5.0 MB"
          />
          <UploadCard
            filename="team-photo.png"
            progress={30}
            currentSize="1.5 MB"
            totalSize="5.0 MB"
          />
          <UploadCard
            filename="meeting-notes.docx"
            progress={100}
            currentSize="0.8 MB"
            totalSize="0.8 MB"
            status="completed"
          />
        </div>
      </ComponentPreview>

      <InstallationTabs
        componentName="upload-card"
        dependencies={["lucide-react"]}
        manualSteps={manualSteps}
      />

      <PropsTable
        props={[
          { name: "filename", type: "string", default: "-" },
          { name: "progress", type: "number (0-100)", default: "0" },
          { name: "currentSize", type: "string", default: "-" },
          { name: "totalSize", type: "string", default: "-" },
          { name: "status", type: '"uploading" | "completed" | "error"', default: '"uploading"' },
          { name: "fileType", type: '"pdf" | "doc" | "image" | "video"', default: '"pdf"' },
        ]}
      />
    </ComponentPageLayout>
  );
}
