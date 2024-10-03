import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

export type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export function Link(props: LinkProps) {
  return (
    <NextLink
      className={clsx(["text-blue-500", "hover:text-blue-600", "focus:text-blue-600", "active:text-blue-700"])}
      href={props.to}
    >
      {props.children}
    </NextLink>
  );
}
