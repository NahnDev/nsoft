import { IconButton } from "@/components/common/button/IconButton";
import { TProduct } from "@/types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Image from "next/image";

export type ProductProps = {
  item: TProduct;
};

export default function Product(props: ProductProps) {
  return (
    <div className={clsx(["p-2 text-white", "h-[25em]"])}>
      <div className={clsx(["relative z-0 size-full", "overflow-hidden  rounded-lg", "bg-white"])}>
        <div
          className={clsx(["absolute size-full -top-1/2 left-0 -z-10", "-skew-y-12"])}
          style={{ backgroundColor: props.item.color }}
        ></div>
        <div className="z-10 h-full flex flex-col p-2">
          <div className="p-2 h-20 overflow-hidden">
            <h6 className="font-bold text-xl line-clamp-1">{props.item.name}</h6>
            <div className="w-4/5 overflow-hidden text-ellipsis">
              <span className="text-sm line-clamp-2">{props.item.description} $</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-40 h-40 relative rounded-full overflow-hidden ring-8 ring-white">
              <Image className="object-cover" fill src={props.item.image} alt={""} />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 text-slate-700">
            <div className="flex-1"></div>
            <p className="font-bold text-xl text-center">{props.item.price}$</p>
            <div className="flex-1"></div>
            {/* <BaseButton variant="info" size="sm">
              Add to cart
            </BaseButton> */}
            <QualityPicker />
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QualityPicker() {
  return (
    <div className="grid grid-cols-3 rounded-full ">
      <IconButton variant="outline" className="!size-8 rounded-full" icon={faMinus} />
      <div className=" flex justify-center items-center">
        <span className="font-bold">1</span>
      </div>
      <IconButton variant="outline" className="!size-8 rounded-full" icon={faPlus} />
    </div>
  );
}
