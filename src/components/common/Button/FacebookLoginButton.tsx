import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseButton } from "./BaseButton";

export type ButtonProps = {
  onClick?: () => void;
};

export function FacebookLoginButton(props: ButtonProps) {
  return (
    <BaseButton
      onClick={props.onClick}
      label="Login with Facebook"
      icon={<FontAwesomeIcon icon={faFacebook} />}
      variant="primary"
      className="py-3"
    />
  );
}
