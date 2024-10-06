"use client";

import { LogoHeader } from "@/components/common/header";
import AutoScrollBox from "@/components/landing/ScreenBox";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBuilding, faCashRegister, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export type TApp = {
  code: string;
  name: string;
  description: string;
  icon: IconDefinition;
  href: string;
};
const APPS: TApp[] = [
  {
    code: "pos",
    name: "POS",
    description: "Point of sale",
    icon: faCashRegister,
    href: "/pos/order",
  },
  {
    code: "pms",
    name: "PMS",
    description: "Process management system",
    icon: faTableColumns,
    href: "/pms",
  },
];

export default function Home() {
  return (
    <div>
      <AutoScrollBox>
        <div className="flex flex-col justify-center items-center gap-10">
          <LogoHeader
            title="NSOFT - Phan mem tong hop"
            description="Mot va phan mien huu ich cho ban"
            descriptionClassName="text-xl text-slate-700"
          />

          <div className="flex flex-row gap-10">
            {APPS.map((app) => (
              <Link
                href={app.href}
                key={app.code}
                className="text-orange-500 border-4 border-orange-500 rounded-xl p-10"
              >
                <div className="flex flex-col justify-center items-center">
                  <FontAwesomeIcon icon={app.icon} className="text-5xl " />
                  <div className="h-4"></div>
                  <h6 className="text-2xl font-bold text-slate-900">{app.name}</h6>
                  <p className="text-lg text-slate-500">{app.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AutoScrollBox>
      <AutoScrollBox className="bg-orange-700">
        <div className="">This is footer</div>
      </AutoScrollBox>
    </div>
  );
}
