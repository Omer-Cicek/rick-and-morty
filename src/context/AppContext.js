import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let dataArr = [];
      try {
        for (let i = 1; i < 8; i++) {
          const response = await fetch(
            `https://rickandmortyapi.com/api/location?page=${i}`
          );
          const data = await response.json();
          dataArr.push(data.results);
        }
        setLocationsData(dataArr.flat());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={locationsData}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
