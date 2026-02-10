import dayjs from "dayjs";
import type { CartItem } from "./CartItemDetails";

type DeliveryDateProps = {
  cartItem: CartItem & { deliveryOptionId: string };
  deliveryOptions: {
    id: string;
    estimatedDeliveryTimeMs: number;
    priceCents: number;
  }[]
};

export function DeliveryDate({ cartItem, deliveryOptions }: DeliveryDateProps) {
  const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId;
  })!;

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
