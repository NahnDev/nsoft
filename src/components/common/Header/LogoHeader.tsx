import clsx from "clsx";
import Image from "next/image";

export type LogoProps = {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function LogoHeader(props: LogoProps) {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      <div className="flex flex-row items-center justify-center gap-4">
        <Image src="/logo.png" width={64} height={64} alt="logo" />
        <h1 className={clsx(["text-4xl font-bold", props.titleClassName])}>{props.title}</h1>
      </div>
      <span className={clsx(["py-4 text-slate-600", props.descriptionClassName])}>{props.description}</span>
    </div>
  );
}
