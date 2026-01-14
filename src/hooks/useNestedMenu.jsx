// useNestedMenu.js
import { useState } from "react";

export const useNestedMenu = (menuData) => {
  const [path, setPath] = useState([]);

  const getItems = () => {
    let items = menuData; 
    for (const id of path) {
      const found = items.find(i => i.id === id);
      items = found?.children || [];
    }
    return items;
  };

  const openChild = (id) => setPath(p => [...p, id]);
  const goBack = () => setPath(p => p.slice(0, -1));
  const reset = () => setPath([]);

  return {
    path,
    items: getItems(),
    openChild,
    goBack,
    reset,
  };
};
