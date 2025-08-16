import { Truck, Bell, LayoutGrid, Check } from "lucide-react";
import { Fragment } from "react";

type HeaderProps = { currentStep?: number };

export default function Header({ currentStep = 0 }: HeaderProps) {
  const steps = [
    "Create Shipment",
    "Repacking & Consolidation",
    "Shipment Details",
    "Shipping Method",
    "Summary & Confirmation",
  ];

  return (
    <header className="w-full bg-white">
      {/*Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 bg-[#F6F9FF] border-b border-[#E8EDF5]">
        <div className="flex items-center text-[13px] leading-none">
          <Truck size={18} className="mr-3 text-blue-600" />
          <span className="text-gray-700 font-medium">Shipments</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Create New</span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <button
              aria-label="Notifications"
              className="h-9 w-9 rounded-full bg-white border shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              <Bell className="h-5 w-5" />
            </button>
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-blue-600 border-2 border-white" />
          </div>
          <button
            aria-label="Apps"
            className="h-9 w-9 rounded-full bg-white border shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100"
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
        </div>
      </div>


      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-[#E8EDF5] bg-white">
        <div className="flex items-center w-full">
          <div className="flex items-center w-full">
          {steps.map((step, index) => {
            const isCurrent = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <Fragment key={index}>
                <div className="flex items-center flex-1 min-w-0">
                  {isCompleted ? (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-green-500 text-white flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                  ) : (
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[12px] sm:text-sm font-medium flex-shrink-0 ${
                        isCurrent
                          ? "bg-blue-600 text-white"
                          : "border-2 border-blue-500 text-blue-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                  )}
                  <span className={`ml-2 text-[12px] sm:text-[14px] ${isCurrent ? "font-semibold text-black" : "text-black"} truncate`}>
                    {step}
                  </span>
                </div>
                {index !== steps.length - 1 && (
                  <div className="h-[1px] sm:h-[2px] bg-[#98C0FF] mx-2 sm:mx-8 flex-shrink-0 w-6 sm:w-auto grow" />
                )}
              </Fragment>
            );
          })}
          </div>
        </div>
      </div>
    </header>
  );
}
