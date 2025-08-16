import { User2, Building2, Menu } from "lucide-react";

export default function CustomerInfo() {
  return (
    <div className="bg-white rounded-xl border border-[#E8EDF5] shadow-sm px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center divide-x divide-[#E8EDF5] overflow-x-auto gap-4 sm:gap-0">
        {/* Customer */}
        <div className="min-w-[220px] flex items-center pr-4 sm:pr-6">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1558C0] border border-[#98C0FF] bg-white">
            <User2 className="h-5 w-5" />
          </div>
          <div className="leading-[1.15]">
            <div className="text-[12px] text-gray-500 mb-0.5">Customer name</div>
            <div className="text-[14px] font-semibold text-gray-800">Adedamola Olarele</div>
          </div>
        </div>

        {/* Business */}
        <div className="min-w-[220px] flex items-center px-4 sm:px-6">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1558C0] border border-[#98C0FF] bg-white">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="leading-[1.15]">
            <div className="text-[12px] text-gray-500 mb-0.5">Business name</div>
            <div className="text-[14px] font-semibold text-gray-800">Dolf Technologies</div>
          </div>
        </div>

        {/* Unit */}
        <div className="min-w-[220px] flex items-center pl-4 sm:pl-6">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1558C0] border border-[#98C0FF] bg-white">
            <Menu className="h-5 w-5" />
          </div>
          <div className="leading-[1.15]">
            <div className="text-[12px] text-gray-500 mb-0.5">Unit no.</div>
            <div className="text-[14px] font-semibold text-gray-800">1E</div>
          </div>
        </div>
      </div>
    </div>
  );
}
