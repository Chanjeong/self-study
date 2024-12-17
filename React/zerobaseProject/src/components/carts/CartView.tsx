import { Link } from "react-router-dom";
import { useState } from "react";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import ConfirmDialog from "./ConfirmDialog";
import styles from "../../assets/css/CartView.module.css";
import { useCart } from "../../helpers/CartProvider";
import cx from "clsx";

const CartView = (): JSX.Element => {
  const { cart, updateQuantity, clearCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleQuantityChange = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const handleBuy = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    clearCart();
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };
  return (
    <>
      <section className="pt-4 lg:pt-20 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumb category="홈" crumb="장바구니" />
        <div className={cx("mt-6 md:mt-14 px-2 lg:px-0", styles.cartContainer)}>
          {cart.length === 0 ? (
            <div>
              <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
              <Link to="/" className="btn btn-primary mt-10">
                담으러 가기
              </Link>
            </div>
          ) : (
            <div className={styles.products}>
              {cart.map((product) => (
                <div key={product.id} className={styles.productContainer}>
                  <figure className={styles.productImage}>
                    <img src={product.image} alt={product.title} className={styles.image} />
                  </figure>
                  <div className={styles.information}>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.price}>
                      <div style={{ fontSize: "30px", marginRight: "10px" }}>${product.price * product.quantity}</div>
                      <div style={{ fontSize: "25px" }}>(${product.price * 1})</div>
                    </div>
                    <div className={styles.quantity}>
                      <button
                        className={cx("btn btn-primary mt-10", styles.buttonLeft)}
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        className={cx("btn btn-primary mt-10", styles.buttonRight)}
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.totalPrice}>
            총: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}
            <button className={cx("btn btn-primary mt-10", styles.buy)} onClick={handleBuy}>
              구매하기
            </button>
          </div>
        </div>
        <Confirm />
      </section>
      {showConfirm && <ConfirmDialog onConfirm={handleConfirm} onCancel={handleCancel} />}
    </>
  );
};

export default CartView;
