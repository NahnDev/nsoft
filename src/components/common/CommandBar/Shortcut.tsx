import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export type TShortcut = {
  name: string;
  desc: string;
  link: string;
};

export type TShortcutProps = TShortcut & {
  focus: boolean;
};

export default function Shortcut(props: TShortcutProps) {
  return (
    <div
      className={clsx(["p-2 px-4 rounded-lg bg-slate-100 flex flex-row items-center", props.focus && "bg-slate-200"])}
    >
      <div className="">
        <h6 className="font-bold">{props.name}</h6>
        <span className="text-sm text-slate-400">{props.desc}</span>
      </div>
      <div className="flex-1"></div>
      <div className="opacity-50">
        <FontAwesomeIcon icon={faLink} />
      </div>
    </div>
  );
}
