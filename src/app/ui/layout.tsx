import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "UI Generated",
  description: "Generated by formularium",
};

export default function UILayout(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}
