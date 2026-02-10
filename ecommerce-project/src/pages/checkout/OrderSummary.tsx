import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails, type CartItem } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';

type OrderSummaryProps = {
  cart: CartItem[];
  deliveryOptions: {
    id: string;
    estimatedDeliveryTimeMs: number;
    priceCents: number;
  }[];
  loadCart: () => Promise<void>
};

export function OrderSummary({ cart, deliveryOptions, loadCart }: OrderSummaryProps) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

                <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
