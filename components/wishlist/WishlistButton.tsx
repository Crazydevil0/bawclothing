import { useComputed, useSignal } from "@preact/signals";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useWishlist } from "deco-sites/std/packs/vtex/hooks/useWishlist.ts";
import { useUser } from "deco-sites/std/packs/vtex/hooks/useUser.ts";
import { sendEvent } from "deco-sites/fashion/sdk/analytics.tsx";
import { Product } from "https://denopkg.com/deco-cx/apps@0.2.8/vtex/utils/types.ts";

export interface Props {
  product: Product
  price: number;
  productID: string;
  productGroupID?: string;
  variant?: "icon" | "full";
}

function WishlistButton({
  variant = "icon",
  product,
  price,
  productGroupID,
  productID,
}: Props) {
  const { user } = useUser();
  const item = { sku: productID, productId: productGroupID };
  const { loading, addItem, removeItem, getItem } = useWishlist();
  const listItem = useComputed(() => getItem(item));
  const fetching = useSignal(false);

  const isUserLoggedIn = Boolean(user.value?.email);
  const inWishlist = Boolean(listItem.value);

  return (
    <Button
      class={variant === "icon"
        ? "btn-circle btn-ghost gap-2"
        : "btn-outline gap-2"}
      loading={fetching.value}
      aria-label="Add to wishlist"
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!isUserLoggedIn) {
          window.alert("Faça login para inserir itens na sua wishlist");

          return;
        }

        if (loading.value) {
          return;
        }

        sendEvent({
          name: "add_to_wishlist",
          params: {
            shopper: user.value?.email
              ? {
                email: user.value?.email,
                id: user.value?.id,
              }
              : undefined,
            items: [{
              item_id: productGroupID || "",
              item_variant: productID,
              value: price,
              currency: 'BRL',
              quantity: 1,
            }],
          },
        });

        try {
          fetching.value = true;
          inWishlist
            ? await removeItem({ id: listItem.value!.id }!)
            : await addItem(item);
        } finally {
          fetching.value = false;
        }
      }}
    >
      <Icon
        id="Heart"
        size={25}
        strokeWidth={1}
        fill={inWishlist ? "black" : "none"}
      />
      {variant === "icon" ? null : inWishlist ? "Remover" : "Favoritar"}
    </Button>
  );
}

export default WishlistButton;
