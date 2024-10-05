"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export type MenuItem = {
  name: string;
  divider?: "top" | "bottom" | "both";
  href?: string;
  icon?: IconDefinition;
  children?: MenuProps["items"];
};
export type MenuProps = { className?: string; items: MenuItem[] };

export function Menu(props: MenuProps) {
  return (
    <div className={clsx([props.className, "flex flex-col gap-2"])}>
      {props.items.map((item, index) => (
        <MenuItem key={index} {...item}></MenuItem>
      ))}
    </div>
  );
}

function MenuItem(props: MenuItem) {
  const pathname = usePathname();
  const isGroup = useMemo(() => props.children && props.children.length > 0, [props.children]);
  const active = useMemo(() => props.href && pathname.includes(props.href), [props.href, pathname]);

  return (
    <div
      className={clsx([
        "p-2 text-slate-500 rounded-lg group",
        !isGroup && "cursor-pointer hover:text-slate-800",
        active && "bg-slate-100 font-bold",
        props.divider === "top" && "border-t border-slate-200",
        props.divider === "bottom" && "border-b border-slate-200",
        props.divider === "both" && "border-t border-b border-slate-200",
      ])}
    >
      <Link
        href={props.href ?? ""}
        className={clsx([
          "flex flex-row items-center",
          isGroup && "py-4 text-slate-400 pointer-events-none",
          active && "text-orange-500",
        ])}
      >
        {props.icon && <FontAwesomeIcon icon={props.icon} className={clsx(["size-10 mr-2"])} />}
        <div className={clsx([isGroup && "uppercase font-bold", "select-none"])}>{props.name}</div>
      </Link>
      <div className="flex flex-col gap-2">
        {props.children && props.children.map((child, index) => <MenuItem key={index} {...child}></MenuItem>)}
      </div>
    </div>
  );
}
