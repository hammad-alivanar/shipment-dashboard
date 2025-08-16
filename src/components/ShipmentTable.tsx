"use client";

import { useState } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import PhotoModal from "./PhotoModal";
import { ShipmentRow } from "@/types";
import { useEffect } from "react";

const initialRows: ShipmentRow[] = [
  {
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photosCount: 5,
  },
  {
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photosCount: 5,
  },
  {
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photosCount: 5,
  },
  {
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photosCount: 5,
  },
  {
    tracking: "xxxxxxxxxxx 310326",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    received: "JUL-07-2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photosCount: 5,
  },
];

export type ShipmentSelection = ShipmentRow[];

type Props = {
  onSelectionChange?: (rows: ShipmentSelection) => void;
};

export default function ShipmentTable({ onSelectionChange }: Props) {
  const [rows] = useState<ShipmentRow[]>(initialRows);
  const [selected, setSelected] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });
  const allChecked = Object.keys(selected).length === rows.length && rows.length > 0;
  type RepackChoice = "none" | "remove" | "full";
  const [repackChoices, setRepackChoices] = useState<Record<number, RepackChoice>>({
    0: "none",
    1: "remove",
    2: "full",
  });

  const toggleAll = () => {
    if (allChecked) {
      setSelected({});
    } else {
      const next: Record<number, boolean> = {};
      rows.forEach((_, i) => (next[i] = true));
      setSelected(next);
    }
  };

  const toggleRow = (i: number) =>
    setSelected((prev) => ({ ...prev, [i]: !prev[i] }));

  // Emit selected rows only when selection changes
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = rows.filter((_, i) => selected[i]);
      onSelectionChange(selectedRows);
    }
  }, [selected, rows, onSelectionChange]);

  const [modalOpen, setModalOpen] = useState(false);
  const sampleImages = [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="bg-white rounded-2xl mt-4 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[1080px] w-full text-left text-[13px]">
        <thead>
          <tr className="bg-[#1558C0] text-white">
            <th className="w-12 px-3 py-3 border-r border-white/15">
              <input
                type="checkbox"
                checked={allChecked}
                onChange={toggleAll}
                className="h-4 w-4 rounded border-white/40 bg-transparent accent-white"
              />
            </th>
            <th className="px-4 py-3 font-semibold whitespace-nowrap border-r border-white/15">
              <div className="flex items-center gap-1">
                Tracking <ArrowUpDown className="h-3.5 w-3.5 text-white/90" />
              </div>
            </th>
            <th className="px-4 py-3 font-semibold whitespace-nowrap border-r border-white/15">
              <div className="flex items-center gap-1">
                Weight & Dimensions <ArrowUpDown className="h-3.5 w-3.5 text-white/90" />
              </div>
            </th>
            <th className="px-4 py-3 font-semibold whitespace-nowrap border-r border-white/15">
              <div className="flex items-center gap-1">
                Received <ArrowUpDown className="h-3.5 w-3.5 text-white/90" />
              </div>
            </th>
            <th className="px-4 py-3 font-semibold border-r border-white/15">Description</th>
            <th className="px-4 py-3 font-semibold whitespace-nowrap border-r border-white/15">Select Repack Option</th>
            <th className="px-4 py-3 font-semibold">Photos</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="px-3 py-3 align-top border-r border-[#E8EDF5]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!selected[i]}
                    onChange={() => toggleRow(i)}
                    className="h-4 w-4 rounded border-gray-300 accent-blue-600"
                  />
                  <span className="text-[12px] text-gray-700">{i + 1}</span>
                </div>
              </td>
              <td className="px-4 py-3 align-top text-gray-700 border-r border-[#E8EDF5]">{r.tracking}</td>
              <td className="px-4 py-3 align-top text-gray-700 border-r border-[#E8EDF5]">
                <div className="flex items-center gap-3">
                  <span>{r.weight}</span>
                  <span className="w-px h-4 bg-gray-300" />
                  <span>{r.dimensions}</span>
                </div>
              </td>
              <td className="px-4 py-3 align-top text-gray-700 border-r border-[#E8EDF5]">{r.received}</td>
              <td className="px-4 py-3 align-top text-gray-700 max-w-[460px] border-r border-[#E8EDF5]">
                {r.description}
              </td>
              <td className="px-4 py-3 align-top border-r border-[#E8EDF5]">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`repack-${i}`}
                      checked={(repackChoices[i] ?? "none") === "none"}
                      onChange={() => setRepackChoices((c) => ({ ...c, [i]: "none" }))}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span>Do not repack</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`repack-${i}`}
                      checked={repackChoices[i] === "remove"}
                      onChange={() => setRepackChoices((c) => ({ ...c, [i]: "remove" }))}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span>Remove outer box only</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`repack-${i}`}
                      checked={repackChoices[i] === "full"}
                      onChange={() => setRepackChoices((c) => ({ ...c, [i]: "full" }))}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span>Full Repack</span>
                  </label>
                </div>
              </td>
              <td className="px-4 py-3 align-top">
                <button
                  onClick={() => setModalOpen(true)}
                  className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={sampleImages[0]}
                    className="w-full h-full object-cover blur-[1.5px] scale-105 opacity-90"
                    alt="thumb"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-[12px] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      +{r.photosCount}
                    </span>
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>

      {/* Pagination / footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3">
        <div className="text-[12px] text-gray-600">
          Showing
          <select className="mx-2 rounded border border-gray-300 bg-white px-2 py-1 text-[12px]">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          out of 50
        </div>
        <div className="flex items-center gap-3">
          <button className="h-7 w-7 flex items-center justify-center rounded bg-white border border-gray-300 text-gray-700">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="h-7 w-7 rounded bg-blue-600 text-white text-[12px]">1</button>
          <button className="h-7 w-7 flex items-center justify-center rounded bg-white border border-gray-300 text-gray-700">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <PhotoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        customerName="Adedamola Olarele"
        businessName="Dolf Technologies"
        unit="1E"
        images={sampleImages}
      />
    </div>
  );
}
