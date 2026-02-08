import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
import "./HomePage.css";
import type { Product } from './Product';

type HomePageProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[],
  loadCart: () => Promise<void>;
};

export function HomePage({ cart, loadCart }: HomePageProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
