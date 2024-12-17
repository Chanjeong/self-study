import styles from "../../assets/css/ItemList.module.css";
import axios from "axios";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import cx from "clsx";
import { useEffect, useState } from "react";
import { useSearch } from "../../helpers/SearchProvider";

export interface Product {
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
interface Props {
  category: string;
  darkMode: boolean;
  limit?: number;
}

export default function ItemList({ category, darkMode, limit }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const apiUrl = import.meta.env.VITE_FAKE_STORE_API;
  const { search, setSearchResult } = useSearch();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get<Product[]>(`${apiUrl}/products`);
        const filteredData = data.data.filter((data) => data.category.includes(category));
        const searchedData = data.data.filter((product) =>
          product.title.toLowerCase().includes(search.toLocaleLowerCase())
        );
        setSearchResult(searchedData);
        if (limit) {
          setProducts(filteredData.slice(0, limit));
        } else {
          setProducts(filteredData);
        }
      } catch (error) {
        console.log("Error fetching the products", error);
      }
    }
    fetchData();
  }, [apiUrl, search]);

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className={styles.product}>
            <figure className={cx(styles.productImage, { [styles.dark]: darkMode })}>
              <img className={styles.image} src={product.image} alt={product.title} />
            </figure>
            <div className={cx(styles.information, { [styles.dark]: darkMode })}>
              <div className={styles.title}>{product.title}</div>
              <div className={styles.price}>${product.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
