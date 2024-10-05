import { useHotkeys } from "react-hotkeys-hook";

export function HotKey(props: { shortcut: string; onTrigger: () => void }) {
  useHotkeys(props.shortcut, () => {
    props.onTrigger();
  });
  return <></>;
}
