"use client";
import Sidebar, { SidebarKey } from "@/components/Sidebar";
import Header from "@/components/Header";
import CustomerInfo from "@/components/CustomerInfo";
import ShipmentTable, { ShipmentSelection } from "@/components/ShipmentTable";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<SidebarKey>("shipments");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedRows, setSelectedRows] = useState<ShipmentSelection>([]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar active={active} onChange={setActive} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {active === "shipments" ? (
          <>
            <Header currentStep={currentStep} />
            <main className="flex-1 px-3 sm:px-6 py-3 sm:py-6 overflow-hidden">
              <div className="h-full flex flex-col">
                <CustomerInfo />
                <div className="flex-1 min-h-0 mt-4">
                  {currentStep === 0 || currentStep === 1 ? (
                    <ShipmentTable onSelectionChange={setSelectedRows} />
                  ) : null}
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 mt-4 pt-4 border-t border-gray-200 bg-gray-50">
                  <button
                    className="px-4 sm:px-6 py-2 bg-gray-200 rounded-lg cursor-pointer w-full sm:w-auto text-sm hover:bg-gray-300 transition-colors"
                    onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                  >
                    Back
                  </button>
                  <button
                    className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer w-full sm:w-auto text-sm hover:bg-blue-700 transition-colors"
                    onClick={() => setCurrentStep((s) => Math.min(4, s + 1))}
                  >
                    Next
                  </button>
                </div>
              </div>
            </main>
          </>
        ) : null}
      </div>
    </div>
  );
}
