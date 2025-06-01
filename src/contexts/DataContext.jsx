import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import tr from "../data/tr.json";
import en from "../data/en.json";
import { useLanguage } from "./LanguageContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();

  const getData = async () => {
    axios
      .post("https://reqres.in/api/workintech", language === "tr" ? tr : en, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, [language]);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
