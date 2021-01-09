import React from "react";

const useLocalStorage = () => {
  return [
    (key) => {
      return JSON.parse(window.localStorage.getItem(key));
    },
    (key, value, remove = false) => {
      window.localStorage.setItem(key, JSON.stringify(value));
      return JSON.parse(window.localStorage.getItem(key));
    },
  ]
}

export default useLocalStorage;