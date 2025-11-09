"use client";

import { GlobalStyles } from "./GlobalStyles";

import { useState } from "react";
import StyledComponentsRegistry from "@/libs/registry";
import Preloader from "../UI/Preloader";
import Header from "../UI/Header";

import ReactLenis from "lenis/react";
import Footer from "../UI/Footer";

const Layout = ({ children }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <div className={complete ? "complete" : "not_complete"}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
