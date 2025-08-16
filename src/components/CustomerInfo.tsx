import { User2, Building2, Hash } from "lucide-react";

export default function CustomerInfo() {
  return (
    <div className="bg-white border-b border-[#E8EDF5] px-4 sm:px-6 py-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Customer */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1558C0]">
            <User2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500 leading-tight">Customer name</div>
            <div className="text-[15px] font-semibold text-gray-900 leading-tight">Adedamola Olarele</div>
          </div>
        </div>

        {/* Business */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1558C0]">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500 leading-tight">Business name</div>
            <div className="text-[15px] font-semibold text-gray-900 leading-tight">Dolf Technologies</div>
          </div>
        </div>

        {/* Unit */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1558C0]">
            <Hash className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[12px] text-gray-500 leading-tight">Unit no.</div>
            <div className="text-[15px] font-semibold text-gray-900 leading-tight">1E</div>
          </div>
        </div>
      </div>
    </div>
  );
}
