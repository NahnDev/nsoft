"use client";

import { CommandBar } from "@/components/common/CommandBar";
import { TShortcut } from "@/components/common/CommandBar/Shortcut";

const shortcuts: TShortcut[] = [
  {
    name: "Log out",
    desc: "Log out of the application",
    link: "/logout",
  },
  {
    name: "Log in",
    desc: "Log in to the application",
    link: "/login",
  },
];

export default function UIPage() {
  return (
    <div>
      <div>hellow</div>
      <CommandBar command="ctrl+k" description="Shortcut command" shortcuts={shortcuts} />
    </div>
  );
}
