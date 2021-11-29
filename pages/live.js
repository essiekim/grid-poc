import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import { content, footer } from "../styles/grid.module.css";
import { live, navrail, rail } from "../styles/live.module.css";

const Container = () => {
  return (
    <div className={live}>
      <Header />
      <Body />
      <div className={`${navrail} ${content}`}>navigation left rail</div>
      <div className={`${rail} ${content}`}>
        ad rail (basically blank space)
      </div>

      <div className={`${footer} ${content}`}>footer</div>
    </div>
  );
};

export default Container;
