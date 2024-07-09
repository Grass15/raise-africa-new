"use client";
import React, { useState, useEffect, ReactDOM } from "react";

const TranslationWrapper = ({ children, targetLanguage }) => {
  const [isTranslated, setIsTranslated] = useState(false);

  const translateChildren = (children, index) => {
    if (typeof children === "string") {
      console.log(children);
      return "translated Text";
    }

    if (Array.isArray(children)) {
      return children.map((child, index) => translateChildren(child, index));
    }

    if (
      typeof children === "object" &&
      children.props &&
      children.props.children
    ) {
      return React.cloneElement(
        children,
        { key: index },
        translateChildren(children.props.children, index),
      );
    }

    return children;
  };

  return translateChildren(children, 0);
};

export default TranslationWrapper;
