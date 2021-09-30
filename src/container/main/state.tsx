import axios from "axios";
import { useState } from "react";
import { allCategoriesUrl, categoryUrl, randomUrl } from "./constants";

const initialState = {
  joke: "Loading",
  categories: [],
  isLoaded: false,
};

const useMainState = () => {
  const [State, setState] = useState(initialState);

  const getData = async () => {
    try {
      const getCategories = await axios.get(allCategoriesUrl);
      const randomJoke = await axios.get(randomUrl);

      if (getCategories.status && randomJoke.status === 200) {
        setState((s) => ({
          ...s,
          categories: getCategories.data,
          joke: randomJoke.data.value,
          isLoaded: !State.isLoaded,
        }));
      } else {
        console.error(getCategories.statusText || getCategories.status);
      }
    } catch (error) {
      console.error(error);
      alert("API not available " + error);
    }
  };

  const setJoke = async (getJoke: string) => {
    let getCatJoke = await axios.get(
      getJoke === "random" ? randomUrl : categoryUrl + getJoke
    );
    setState((s) => ({
      ...s,
      joke: getCatJoke.data.value,
    }));
  };
  return { State, setJoke, getData };
};

export default useMainState;
