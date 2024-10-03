import { useState } from "react";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export type HoldButtonProps = { onHold?: (hold: boolean) => void } & BaseButtonProps;

export default function HoldButton(props: HoldButtonProps) {
  const { onHold, ...otherProps } = props;
  const [, setHold] = useState(false);

  const onStart = () => {
    setHold(true);
    onHold?.(true);
  };
  const onEnd = () => {
    setHold(false);
    onHold?.(false);
  };

  return (
    <BaseButton
      {...otherProps}
      onMouseDown={onStart}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onMouseOut={onEnd}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      variant="text"
    >
      {props.children}
    </BaseButton>
  );
}
