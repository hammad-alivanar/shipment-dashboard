"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  X,
  Building2,
  User2,
} from "lucide-react";

type PhotoModalProps = {
  open: boolean;
  onClose: () => void;
  customerName: string;
  businessName: string;
  unit: string;
  images: string[];
};

export default function PhotoModal({
  open,
  onClose,
  customerName,
  businessName,
  unit,
  images,
}: PhotoModalProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4">
      <div className="w-full sm:w-[760px] h-[90vh] sm:h-[820px] max-w-full bg-white shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E8EDF5] bg-[#F6F9FF]">
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="h-8 w-8 rounded-md bg-[#1558C0] text-white flex items-center justify-center cursor-pointer"
              aria-label="Previous"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              onClick={goNext}
              className="h-8 w-8 rounded-md bg-[#1558C0] text-white flex items-center justify-center cursor-pointer"
              aria-label="Next"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
            <span className="text-sm text-gray-700 ml-2">
              {index + 1} of {images.length} Entries
            </span>
          </div>
          <button
            onClick={onClose}
            className="h-6 w-6 rounded-full bg-black hover:bg-black/90 text-white flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Customer banner */}
        <div className="m-4 rounded-lg bg-[#EAF2FF] px-4 py-3">
          <div className="font-semibold text-gray-800 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-[#98C0FF] text-[#1558C0]">
              <User2 className="h-3.5 w-3.5" />
            </span>
            {customerName} ({unit})
          </div>
          <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-[#98C0FF] text-[#1558C0]">
              <Building2 className="h-3.5 w-3.5" />
            </span>
            {businessName}
          </div>
        </div>

        {/* Main image with arrows */}
        <div className="px-2 sm:px-4 pb-4 relative">
          <div className="relative mx-auto w-full sm:w-[520px] max-w-full">
            <img
              src={images[index]}
              className="w-full h-[55vh] sm:h-[420px] object-cover rounded-lg border border-[#E8EDF5]"
              alt="Selected"
            />
            <button
              onClick={goPrev}
              className="absolute left-2 sm:left-[-28px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 sm:right-[-28px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Thumbnails with edge nav */}
          <div className="mt-4 relative">
            <button
              onClick={goPrev}
              className="absolute left-[-12px] top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center cursor-pointer"
              aria-label="Previous thumbnail"
            >
              <ChevronLeft className="h-4 w-4 text-gray-700" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-[-12px] top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center cursor-pointer"
              aria-label="Next thumbnail"
            >
              <ChevronRight className="h-4 w-4 text-gray-700" />
            </button>
            <div className="grid grid-cols-5 gap-3 justify-items-center">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-24 h-16 rounded-lg border ${
                    i === index ? "border-[#1558C0] ring-2 ring-[#B8D3FF]" : "border-[#E8EDF5]"
                  } overflow-hidden`}
                >
                  <img src={src} className="w-full h-full object-cover" alt="thumb" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


