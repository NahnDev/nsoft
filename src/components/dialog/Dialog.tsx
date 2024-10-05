"use client";

import { AlertDialog, AlertDialogOverlay, AlertDialogContent } from "@chakra-ui/react";
import clsx from "clsx";
import { PropsWithChildren, useRef } from "react";

export type DialogProps = PropsWithChildren<{
  className?: string;
  onClose?: () => void;
}>;

export function Dialog(props: DialogProps) {
  const leastDestructiveRef = useRef(null);
  return (
    <AlertDialog isCentered isOpen={true} onClose={() => props.onClose?.()} leastDestructiveRef={leastDestructiveRef}>
      <AlertDialogOverlay>
        <AlertDialogContent className={clsx(["max-w-fit", props.className])}>{props.children}</AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
