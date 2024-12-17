import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../common/Rating";
import styles from "../../assets/css/ProductView.module.css";
import { useCart } from "../../helpers/CartProvider";
import BreadCrumb from "../common/Breadcrumb";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductView(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const apiUrl = import.meta.env.VITE_FAKE_STORE_API;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await axios.get<Product>(`${apiUrl}/products/${id}`);
        setProduct(data.data);
      } catch (error) {
        console.log("Error fetching the product", error);
      }
    }
    fetchProduct();
  }, [id, apiUrl]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const moveToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div>
      <section className="pt-4 lg:pt-20 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumb category={product.category} crumb={product.title} />
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <div className={styles.productView}>
            <figure className={styles.productImage}>
              <img src={product.image} alt={product.title} className={styles.image} />
            </figure>
            <div className={styles.information}>
              <div className={styles.title}>
                <h1 className={styles.name}>{product.title}</h1>
                <div className={styles.newBadge}>NEW</div>
              </div>
              <p className={styles.description}>{product.description}</p>
              <Rating rate={product.rating.rate} count={product.rating.count} />
              <div className={styles.price}>${product.price}</div>
              <button onClick={moveToCart} className="btn btn-primary mt-10">
                장바구니에 담기
              </button>
              <Link to={"/cart"}>
                <button className={styles.moveCart}>장바구니 이동</button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
