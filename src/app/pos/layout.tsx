import { LogoHeader } from "@/components/common/header";
import { RandomLoading } from "@/components/common/loading";
import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu/Menu";
import MainScreen from "@/packages/pos";
import { faChartSimple, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { PropsWithChildren, Suspense } from "react";

const MENU_ITEMS: MenuItem[] = [
  {
    name: "Dashboard",
    children: [
      { name: "Order", href: "/pos/order", icon: faDashboard },
      { name: "Analytics", href: "/pos/analytics", icon: faChartSimple },
    ],
  },
];

export default function PosLayout(props: PropsWithChildren) {
  return (
    <div className="size-screen overflow-hidden grid grid-cols-auto-1fr">
      <div className="grid grid-rows-auto-1fr border-r-2 border-slate-200 p-2 pt-4">
        <LogoHeader title="POS" />
        <Menu items={MENU_ITEMS} className="w-80" />
      </div>
      <Suspense fallback={<RandomLoading />}>{props.children}</Suspense>
    </div>
  );
}
