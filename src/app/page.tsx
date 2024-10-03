"use client";

import { BaseButton } from "@/components/common/Button/BaseButton";
import { LogoHeader } from "@/components/common/Header";
import AutoScrollBox from "@/components/landing/ScreenBox";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const to = (href: string) => {
    router.push(href);
  };
  return (
    <div>
      <AutoScrollBox>
        <div className="flex flex-col justify-center items-center">
          <LogoHeader
            title="NSOFT - Phan mem tong hop"
            description="Mot va phan mien huu ich cho ban"
            descriptionClassName="text-xl text-slate-700"
          />
          <div className="flex flex-row justify-center p-10">
            <BaseButton className="!w-80" onClick={() => to("/login")}>
              Join with us
            </BaseButton>
          </div>
        </div>
      </AutoScrollBox>
      <AutoScrollBox className="bg-cyan-700">
        <div className="grid grid-cols-3 text-white">
          <div className="col-span-2 flex flex-col items-center justify-center">
            <LogoHeader
              title="Planning Pocker - Scrum Poker for agile teams"
              description="A fun way to estimate your work"
              descriptionClassName="text-xl text-slate-200"
            />
            <div className="flex flex-row justify-center p-10">
              <BaseButton className="!w-80 !border-white text-white" onClick={() => to("/planning")} variant="outline">
                Join with us
              </BaseButton>
            </div>
          </div>
        </div>
      </AutoScrollBox>
      <AutoScrollBox className="bg-red-700">
        <div className="grid grid-cols-2 text-white">
          <div></div>
          <div className="flex flex-col items-center justify-center">
            <LogoHeader
              title="Form Builder - Build your form easily"
              description="A simple way to create your form"
              descriptionClassName="text-xl text-slate-200"
            />
            <div className="flex flex-row justify-center p-10">
              <BaseButton className="!w-80 !border-white text-white" onClick={() => to("/ui")} variant="outline">
                Join with us
              </BaseButton>
            </div>
          </div>
        </div>
      </AutoScrollBox>
    </div>
  );
}
