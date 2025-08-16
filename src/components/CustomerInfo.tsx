import { User2, Building2, Hash } from "lucide-react";

export default function CustomerInfo() {
  return (
    <div className="bg-white border-b border-[#E8EDF5] px-3 sm:px-6 py-3 sm:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {/* Customer */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1558C0]">
            <User2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] text-gray-500 leading-tight">Customer name</div>
            <div className="text-[13px] sm:text-[15px] font-semibold text-gray-900 leading-tight">Adedamola Olarele</div>
          </div>
        </div>

        {/* Business */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1558C0]">
            <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] text-gray-500 leading-tight">Business name</div>
            <div className="text-[13px] sm:text-[15px] font-semibold text-gray-900 leading-tight">Dolf Technologies</div>
          </div>
        </div>

        {/* Unit */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1558C0]">
            <Hash className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <div className="text-[11px] sm:text-[12px] text-gray-500 leading-tight">Unit no.</div>
            <div className="text-[13px] sm:text-[15px] font-semibold text-gray-900 leading-tight">1E</div>
          </div>
        </div>
      </div>
    </div>
  );
}
