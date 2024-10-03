import clsx from "clsx";

export type SessionHeaderProps = {
  title: string;
  className?: string;
};

export default function SessionHeader({ title, className = "" }: SessionHeaderProps) {
  return <h1 className={clsx(["text-2xl font-semibold", className])}>{title}</h1>;
}
