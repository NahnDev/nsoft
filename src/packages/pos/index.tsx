import Order from "./order/Order";
import { PosStepper } from "./PosStepper";
import ProductCollections from "./products/ProductCollections";

export default function MainScreen() {
  return (
    <div className="grid grid-rows-auto-1fr bg-slate-100 overflow-hidden">
      <PosStepper />
      <div className="size-full grid grid-cols-1fr-auto overflow-hidden">
        <div className="size-full overflow-y-scroll">
          <ProductCollections />
        </div>
        <Order />
      </div>
    </div>
  );
}
