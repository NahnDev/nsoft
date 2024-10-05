import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";

type BarcodeReaderProps = {
  onScanned: (barcode: string) => void;
};

export function BarcodeReader(props: BarcodeReaderProps) {
  const barcodeRef = useRef<string>("");
  const [subfix, setSubfix] = useState("");

  useInterval(() => {
    setSubfix((prev) => (prev.length < 3 ? prev + "." : ""));
  }, 1000);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const barcode = barcodeRef.current;
      if (event.key === "Enter") {
        props.onScanned(barcode);
        barcodeRef.current = barcode;
      } else if (event.key === "Escape") {
        props.onScanned("");
        barcodeRef.current = "";
      } else {
        const isCode = /^[0-9a-zA-Z]$/.test(event.key);
        if (isCode) {
          barcodeRef.current += event.key;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden text-slate-700 animate-pulse">
      <div className="w-[40em] bg-white h-80 flex flex-col gap-2 justify-center items-center">
        <FontAwesomeIcon className="text-5xl" icon={faBarcode} />
        <span className=" font-bold">[Barcode] Scanning {subfix}</span>
      </div>
    </div>
  );
}
