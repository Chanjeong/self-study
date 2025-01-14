import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { cartState } from "./store/cart";
import { CART_ITEM } from "./constants/category";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

const container: HTMLElement = document.getElementById("app")!;
const root = createRoot(container);
const initialValue = JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

root.render(
  <React.StrictMode>
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      <App />
    </RecoilRoot>
    <SpeedInsights/>
    <Analytics/>
  </React.StrictMode>
);
