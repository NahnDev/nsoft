"use client";

import { products } from "@/types/TProduct";
import Product from "./Product";
import { SearchInput } from "@/components/common/input";
import { useMemo, useState } from "react";
import { BaseButton } from "@/components/common/button/BaseButton";

export default function ProductCollections() {
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (product.barcode.includes(search)) return true;
        return product.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div className="size-full overflow-hidden">
      <div className="p-2 flex flex-row">
        <SearchInput className="bg-white rounded-lg overflow-hidden" value={search} onChange={setSearch} />
        <BaseButton variant="primary" size="sm" className="ml-2 rounded-lg">
          Add new product
        </BaseButton>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-auto">
        {filteredProducts.map((product) => {
          return <Product item={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
