import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseButton, BaseButtonProps } from "./BaseButton";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

export type IconButtonProps = Omit<BaseButtonProps, "label" | "icon"> & {
  icon: IconDefinition;
};

export function IconButton(props: IconButtonProps) {
  return (
    <BaseButton
      {...props}
      className={clsx(["justify-center items-center flex", props.className])}
      icon={<FontAwesomeIcon icon={props.icon} />}
    />
  );
}
