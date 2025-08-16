import {
  Truck,
  Package,
  ClipboardList,
  Network,
  Users,
  Settings,
  Power,
  Home,
  Building2,
  FileText,
} from "lucide-react";

type IconButtonProps = {
  label: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

function IconButton({ label, active, children, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`w-full h-14 flex items-center justify-center transition-colors cursor-pointer ${
        active ? "bg-[#FF6A00] text-white" : "text-white/90 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

export type SidebarKey =
  | "home"
  | "users"
  | "documents"
  | "packages"
  | "shipments"
  | "warehouse"
  | "network"
  | "tasks"
  | "settings"
  | "power";

type SidebarProps = {
  active: SidebarKey;
  onChange: (key: SidebarKey) => void;
};

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside className="w-16 bg-[#1558C0] text-white min-h-screen flex flex-col items-center p-0">
      <div className="w-full bg-white flex items-center justify-center h-15 border-b border-[#E8EDF5]">
        <span className="text-[#0B4AA2] font-extrabold text-lg leading-none">S</span>
      </div>

      {/* nav */}
      <nav className="flex flex-col items-stretch w-full">
        <IconButton label="Home" active={active === "home"} onClick={() => onChange("home") }>
          <Home className="h-5 w-5" />
        </IconButton>
        <IconButton label="Users" active={active === "users"} onClick={() => onChange("users") }>
          <Users className="h-5 w-5" />
        </IconButton>
        <IconButton label="Documents" active={active === "documents"} onClick={() => onChange("documents") }>
          <FileText className="h-5 w-5" />
        </IconButton>
        <IconButton label="Packages" active={active === "packages"} onClick={() => onChange("packages") }>
          <Package className="h-5 w-5" />
        </IconButton>
        <IconButton label="Shipments" active={active === "shipments"} onClick={() => onChange("shipments") }>
          <Truck className="h-5 w-5" />
        </IconButton>
        <IconButton label="Warehouse" active={active === "warehouse"} onClick={() => onChange("warehouse") }>
          <Building2 className="h-5 w-5" />
        </IconButton>
        <IconButton label="Network" active={active === "network"} onClick={() => onChange("network") }>
          <Network className="h-5 w-5" />
        </IconButton>
        <IconButton label="Tasks" active={active === "tasks"} onClick={() => onChange("tasks") }>
          <ClipboardList className="h-5 w-5" />
        </IconButton>
      </nav>

      <div className="flex-1" />

      <nav className="flex flex-col items-stretch w-full pb-2">
        <IconButton label="Settings" active={active === "settings"} onClick={() => onChange("settings") }>
          <Settings className="h-5 w-5" />
        </IconButton>
        <IconButton label="Power" active={active === "power"} onClick={() => onChange("power") }>
          <Power className="h-5 w-5" />
        </IconButton>
      </nav>
    </aside>
  );
}
