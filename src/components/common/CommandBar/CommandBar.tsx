"use client";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Input,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
} from "@chakra-ui/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounceValue } from "usehooks-ts";
import Shortcut, { TShortcut } from "./Shortcut";

export type CommandBarProps = {
  command: string;
  description?: string;
  shortcuts: TShortcut[];
};

export function CommandBar(props: CommandBarProps) {
  const { command, description = "" } = props;
  const cancelRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useDebounceValue("", 300);
  const [focus, setFocus] = useState(0);

  const placeholder = useMemo(() => `${description} (${command})`, [command, description]);
  const results = useMemo(
    () => props.shortcuts.filter((s) => s.name.toLowerCase().includes(search.toLowerCase())),
    [props.shortcuts, search]
  );
  const targetIndex = useMemo(() => Math.max(0, Math.min(focus, results.length - 1)), [focus, results]);

  useHotkeys(command, onOpen, { preventDefault: true });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setFocus(Math.min(targetIndex + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setFocus(Math.max(targetIndex - 1, 0));
    } else if (e.key === "Enter" && results[focus]) {
      window.location.href = results[focus].link;
    }
  };

  return (
    <div className="">
      <div className="flex items-center border-2 shadow-sm rounded-full text-slate-400" onClick={onOpen}>
        <FontAwesomeIcon className="pl-4" icon={faSearch} />
        <span className="p-2 select-none pointer-events-none">{placeholder}</span>
      </div>
      <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <InputGroup>
              <InputLeftAddon>
                <FontAwesomeIcon className="text-cyan-500" icon={faSearch}></FontAwesomeIcon>
              </InputLeftAddon>
              <Input
                autoFocus
                className="focus:!shadow-none font-normal"
                placeholder="Shortcut"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onKeyDown}
              />
            </InputGroup>
          </AlertDialogHeader>
          {search && (
            <AlertDialogBody>
              <div className="flex flex-col gap-2">
                {results.map((shortcut, index) => (
                  <Shortcut focus={targetIndex === index} key={shortcut.name} {...shortcut} />
                ))}
              </div>
            </AlertDialogBody>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
