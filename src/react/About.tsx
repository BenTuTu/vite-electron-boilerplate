import React, { memo, useEffect } from "react";
import store from "../store";

const About = () => {
  useEffect(() => {
    console.log(store.getName(), store.name);
  }, []);
  return <div>page about</div>;
};

export default memo(About);
