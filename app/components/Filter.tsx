"use client";
import React, { useState } from "react";
import { useStateContext } from "../context";

// @ts-ignore
const Filter = ({ categories, title }) => {
  const categoryFilter: React.JSX.Element[] = [];
  const [filteredCategories, updateFilteredCategories] = useState<string[]>([]);
  const {
    campaignsFilteredCategories,
    setCampaignsFilteredCategories,
    setPropositionsFilteredCategories,
  } = useStateContext();
  const activateCategory = (category: string) => {
    const categoryIndexInFiltered = filteredCategories.indexOf(category);

    if (categoryIndexInFiltered != -1) {
      updateFilteredCategories([
        ...filteredCategories.filter((x) => x != category),
      ]);
      if (title.toLowerCase() == "proposition") {
        console.log("test");
        setPropositionsFilteredCategories([
          ...filteredCategories.filter((x) => x != category),
        ]);
      } else {
        setCampaignsFilteredCategories([
          ...filteredCategories.filter((x) => x != category),
        ]);
      }
    } else {
      updateFilteredCategories([...filteredCategories, category]);
      if (title.toLowerCase() == "proposition") {
        console.log("test");
        setPropositionsFilteredCategories([...filteredCategories, category]);
      } else {
        setCampaignsFilteredCategories([...filteredCategories, category]);
      }
    }
  };

  const resetCategoryFilter = () => {
    updateFilteredCategories([]);
    if (title.toLowerCase() == "proposition") {
      setPropositionsFilteredCategories([]);
    } else {
      setCampaignsFilteredCategories([]);
    }
  };
  (categories as string[]).forEach((category, index) => {
    categoryFilter.push(
      <li
        key={index + 1}
        className={
          "px-1 rounded-full text-black font-medium " +
          (filteredCategories.includes(category)
            ? "bg-primary"
            : "text-primary border border-primary")
        }
        onClick={() => activateCategory(category)}
      >
        <span>{category}</span>
      </li>,
    );
  });

  return (
    <div className={"w-full"}>
      <ul className="menu menu-horizontal bg-none gap-2 flex flex-wrap">
        <li
          key={0}
          className={
            "px-1 rounded-full text-black font-medium " +
            (filteredCategories.length == 0
              ? "bg-primary"
              : "text-primary border border-primary")
          }
          onClick={() => resetCategoryFilter()}
        >
          <span>
            All <span className={"capitalize"}>{title + "s"}</span>
          </span>
        </li>
        {categoryFilter}
      </ul>
    </div>
  );
};
export default Filter;
