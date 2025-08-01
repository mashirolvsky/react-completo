import React from "react";
import { useEffect } from "react";

const Head = props => {
  useEffect(() => {
    document.title = `Correção | ${props.title}`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
};

export default Head;
