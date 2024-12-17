import React from "react";
import styles from "../../assets/css/ConfirmDialog.module.css";
import { useDarkMode } from "../../helpers/DarkModeProvider";
import cx from "clsx";

interface ConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog<ConfirmDialogProps>({ onConfirm, onCancel }) {
  const { darkMode } = useDarkMode();

  return (
    <div className={styles.overlay}>
      <div className={cx(styles.dialog, { [styles.dark]: darkMode })}>
        <p>{"정말로  구매하시겠습니까?"}</p>
        <p>{"장바구니의 모든 상품들이 삭제됩니다"}</p>
        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={onConfirm}>
            네
          </button>
          <button className={styles.noButton} onClick={onCancel}>
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}
