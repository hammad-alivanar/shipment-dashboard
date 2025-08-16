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
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden sm:block">
        <Sidebar active={active} onChange={setActive} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 min-w-0">
        {active === "shipments" ? (
          <>
            <Header currentStep={currentStep} />
            <main className="p-2 sm:p-6 flex-1 min-h-0 overflow-auto">
              <CustomerInfo />
              {currentStep === 0 || currentStep === 1 ? (
                <ShipmentTable onSelectionChange={setSelectedRows} />
              ) : null}
              <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 mt-4 sm:mt-6">
                <button
                  className="px-4 sm:px-6 py-2 bg-gray-200 rounded-lg cursor-pointer w-full sm:w-auto text-sm"
                  onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                >
                  Back
                </button>
                <button
                  className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer w-full sm:w-auto text-sm"
                  onClick={() => setCurrentStep((s) => Math.min(4, s + 1))}
                >
                  Next
                </button>
              </div>
            </main>
          </>
        ) : null}
      </div>
    </div>
  );
}
