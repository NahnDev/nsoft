import { FormLabel } from "@chakra-ui/react";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Label(props: PropsWithChildren<{ className?: string }>) {
  return <FormLabel className={clsx(["font-semibold select-none", props.className])}>{props.children}</FormLabel>;
}
