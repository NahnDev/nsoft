import { BaseButton } from "@/components/common/button/BaseButton";
import clsx from "clsx";

export default function Order() {
  return (
    <div className="w-[30em] p-2">
      <div className={clsx(["size-full bg-white p-10 gap-2", "flex flex-col", "rounded-lg"])}>
        <div className="flex-1"></div>
        <div className="flex flex-row justify-between">
          <span className="text-2xl">Total: </span>
          <span className="text-2xl">0.00 $</span>
        </div>
        <div className="pt-4">
          <BaseButton size="full" variant="primary">
            Pay
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
