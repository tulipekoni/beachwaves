import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      image: require("./sound1.jpg"),
      id: 0,
    },
    {
      image: require("./sound2.jpg"),
      id: 1,
    },
    {
      image: require("./sound3.jpg"),
      id: 2,
    },
  ]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
