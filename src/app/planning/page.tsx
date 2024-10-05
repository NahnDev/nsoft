"use client";

import { BarcodeReader } from "@/components/code-reader";
import { BaseButton } from "@/components/common/button/BaseButton";
import { Dialog } from "@/components/dialog";
import { useState } from "react";

export default function PlanningPage() {
  const [codes, setCodes] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);

  const handleScanned = (code: string) => {
    setCodes((prev) => [...prev, code]);
    console.log("Scanned code:", code);
    setScanning(false);
  };

  console.log({ scanning });
  return (
    <div>
      <BaseButton onClick={() => setScanning(true)}>Scan barcode</BaseButton>
      <ul>
        {codes.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
      {scanning && (
        <Dialog onClose={() => setScanning(false)}>
          <BarcodeReader onScanned={handleScanned} />
        </Dialog>
      )}
    </div>
  );
}
