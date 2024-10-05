"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { BaseInput } from "./BaseInput";

export const DEFAULT_PLACEHOLDER = "Search";
export type MailInputProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function SearchInput(props: MailInputProps) {
  const placeholder = useMemo(() => props.placeholder || DEFAULT_PLACEHOLDER, [props.placeholder]);

  return (
    <BaseInput
      shortcut="alt+s"
      icon={faSearch}
      placeholder={`${placeholder} (alt+s)`}
      clear
      outline
      value={props.value}
      onChange={props.onChange}
    />
  );
}
