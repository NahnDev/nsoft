"use client";

import { faSearch, faXmarkCircle, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useRef, useState } from "react";
import { HotKey } from "../hot-key";

export const DEFAULT_PLACEHOLDER = "Search";
export type BaseInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  icon?: IconDefinition;
  clear?: boolean;
  outline?: boolean;
  placeholder?: string;
  shortcut?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export function BaseInput(props: BaseInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      props.onChange?.("");
    }
    props.inputProps?.onKeyDown?.(e);
  };

  const hanldeClear = () => {
    props.onChange?.("");
    inputRef.current?.focus();
  };

  return (
    <div
      className={clsx([
        "duration-500",
        "flex flex-row items-center overflow-hidden",
        props.outline ? "rounded-full" : "rounded-lg",
        "bg-white duration-500",
        focus && "ring-2 ring-gray-200",
        props.className,
      ])}
    >
      {props.icon && (
        <div className={clsx(["size-10 flex justify-center items-center"])} onClick={() => inputRef.current?.focus()}>
          <FontAwesomeIcon icon={faSearch} className="" />
        </div>
      )}
      <input
        ref={inputRef}
        {...props.inputProps}
        placeholder={props.placeholder ?? props.inputProps?.placeholder}
        value={props.value}
        onChange={handleChange}
        className={clsx(["flex-1 px-2", "focus:outline-none", "text-base text-inherit", props.inputProps?.className])}
        onFocus={(e) => {
          setFocus(true);
          props.inputProps?.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          props.inputProps?.onBlur?.(e);
        }}
        onKeyDown={handleKeydown}
      />
      {props.clear && props.value && (
        <div
          className={clsx([
            "group",
            "size-10 flex justify-center items-center",
            "cursor-pointer",
            "duration-500",
            focus ? "opacity-100" : "opacity-0",
            "hover:opacity-100",
          ])}
          onClick={hanldeClear}
        >
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="group-hover:ring-4 group-hover:ring-slate-200 rounded-full"
          />
        </div>
      )}
      {props.shortcut && <HotKey shortcut={props.shortcut} onTrigger={() => inputRef.current?.focus()} />}
    </div>
  );
}
