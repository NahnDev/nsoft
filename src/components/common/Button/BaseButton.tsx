"use client";

import { VariantProp, SizeProps } from "@/types";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export type BaseButtonProps = PropsWithChildren<{
  onClick?: () => void;
  label?: string;
  pending?: boolean;
  disabled?: boolean;
  variant?: VariantProp;
  size?: SizeProps;
  icon?: React.ReactNode;
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BaseButton(props: BaseButtonProps) {
  const { icon, label, pending, disabled, variant, size, className, ...otherProps } = props;
  const [isPressed, setIsPressed] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isPressed) return;
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 500);
    props.onClick?.(e);
  };

  return (
    <button
      {...otherProps}
      className={clsx([
        "h-10 p-2 overflow-hidden rounded-full",
        "hover:ring-2 hover:ring-gray-200",
        "font-bold",
        size === "full" && "px-8 py-3 w-full",
        size === "lg" && "px-6 py-3 w-80",
        size === "md" && "px-4 py-3 w-60",
        size === "sm" && "px-3 py-2 w-40",
        size === "xs" && "px-2 py-2 w-20",

        !variant && "bg-slate-500 hover:bg-slate-600",
        variant === "outline" && "border-2 border-slate-500 hover:bg-slate-500 text-slate-500 hover:text-white",
        variant === "text" ? "text-slate-800" : "text-slate-100",
        variant === "text" && "hover:bg-slate-200",
        variant === "primary" && "bg-orange-500 hover:bg-orange-600",
        variant === "danger" && "bg-red-500 hover:bg-red-600",
        variant === "success" && "bg-green-500 hover:bg-green-600",
        variant === "warning" && "bg-yellow-500 hover:bg-yellow-600",
        variant === "info" && "bg-blue-500 hover:bg-blue-600",
        " disabled:bg-gray-300",
        "active:scale-95 duration-500",
        className,
      ])}
      disabled={disabled}
      onClick={handleClick}
    >
      {pending && <FontAwesomeIcon className="px-2" icon={faSpinner} spin />}
      {icon && <span className="px-2">{icon}</span>}
      {label && <span className="select-none">{label}</span>}
      {props.children}
    </button>
  );
}
