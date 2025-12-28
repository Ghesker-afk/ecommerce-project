import { Product } from './Product';

type ProductsGridProps = {
  products: {
    product: {
    id: string;
    image: string;
    name: string;
    rating: {
      stars: number;
      count: number;
    };
    priceCents: number;
  }
  }[],
  loadCart: () => Promise<void>
};

export function ProductsGrid({ products, loadCart }: ProductsGridProps) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.product.id} product={product.product} loadCart={loadCart} />
        );
      })}
      ;
    </div>
  );
}
