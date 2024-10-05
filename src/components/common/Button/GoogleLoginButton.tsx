import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { BaseButton } from "./BaseButton";

export type ButtonProps = {
  onClick?: () => void;
};

export function GoogleLoginButton(props: ButtonProps) {
  return (
    <BaseButton
      onClick={props.onClick}
      label="Login with Google"
      icon={<FontAwesomeIcon icon={faGoogle} />}
      className={clsx(["!bg-orange-500", "hover:!bg-orange-600 py-3"])}
    />
  );
}
