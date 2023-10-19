import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "apps/commerce/types.ts";
import AddToCartAvatar from "$store/components/product/AddToCartAvatar.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import Image from "deco-sites/std/components/Image.tsx";
import AvatarColor from "$store/components/ui/AvatarColor.tsx";
import WishlistIcon from "$store/components/wishlist/WishlistButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { sendEventOnClick } from "$store/sdk/analytics.tsx";

import { useState } from "preact/hooks";

interface Props {
  product: Product;
}

function VariantSelector(
  { product, product: { url, isVariantOf, productID } }: Props,
) {
  const possibilities = useVariantPossibilities(product);

  const allProperties = (isVariantOf?.hasVariant ?? [])
    .flatMap(({ offers = {}, url, productID }) =>
      offers.offers?.map((property) => ({ property, url, productID }))
    ).map((p) => ({
      lvl: p?.property.inventoryLevel.value,
      url: p?.url,
      productID: p?.productID,
    }));

  const variants = Object.entries(Object.values(possibilities)[0] ?? {}).map(
    (v) => {
      const [value, [link]] = v;
      const lvl = allProperties.find((p) => p.url === link)?.lvl;
      const skuID = allProperties.find((p) => p.url === link)?.productID;
      return { value, link, lvl: lvl as number, productID: skuID };
    },
  );

  const outOfStock = variants.filter((item) => item.lvl > 0).length === 0;
  const pppp = variants.find((sku) => sku.value === "4P") ||
    variants.find((sku) => sku.value === "04");
  const ppp = variants.find((sku) => sku.value === "3P") ||
    variants.find((sku) => sku.value === "06");
  const pp = variants.find((sku) => sku.value === "PP") ||
    variants.find((sku) => sku.value === "08");
  const p = variants.find((sku) => sku.value === "P") ||
    variants.find((sku) => sku.value === "10");
  const m = variants.find((sku) => sku.value === "M") ||
    variants.find((sku) => sku.value === "12");
  const g = variants.find((sku) => sku.value === "G");
  const gg = variants.find((sku) => sku.value === "GG");
  const ggg = variants.find((sku) => sku.value === "3G");
  const gggg = variants.find((sku) => sku.value === "4G");

  let newVariants = [pppp, ppp, pp, p, m, g, gg, ggg, gggg];
  newVariants = newVariants.filter((item) => item !== undefined);

  const [visibleProduct, setVisibleProduct] = useState(product);
  const [similarProducts, setSimilarProducts] = useState(
    product.isSimilarTo?.map((similar: Product) => similar).concat([
      visibleProduct,
    ]) || [],
  );
  const [outOfStock1, setOutOfStock] = useState(false);
  const [offer, setOffer] = useState(useOffer(visibleProduct.offers));
  const [installmentsText, setInstallmentsText] = useState("");

  const {
    name,
    image: images,
    offers,
    isSimilarTo,
  } = visibleProduct;
  const fImages = images?.filter((img) =>
    img.alternateName !== "color-thumbnail"
  );
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = fImages ?? [];
  const { listPrice, price, installments, availability, seller } = offer;
  const installmentText = installments?.replace(" sem juros", "").replace(
    ".",
    ",",
  ).replace(" de", "");

  return (
    <ul class="flex items-center justify-center  w-full">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-row flex-wrap  gap-2  justify-center  p-[0px] ">
          {newVariants.length > 0
            ? (newVariants.map((item) => (
              <AddToCartAvatar
                skuId={item?.productID || productID}
                sellerId={seller || ""}
                price={price ?? 0}
                discount={price && listPrice ? listPrice - price : 0}
                name={product.name ?? ""}
                productGroupId={product.isVariantOf?.productGroupID ??
                  ""}
                variant={item?.lvl !== 0 ? "default" : "disabled"}
                content={item?.value!}
              />
            )))
            : (variants.map((item) => (
              <AddToCartAvatar
                skuId={item?.productID || productID}
                sellerId={seller || ""}
                price={price ?? 0}
                discount={price && listPrice ? listPrice - price : 0}
                name={product.name ?? ""}
                productGroupId={product.isVariantOf?.productGroupID ??
                  ""}
                variant={item?.lvl !== 0 ? "default" : "disabled"}
                content={item?.value!}
              />
            )))}
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
