import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [locationsData, setLocationsData] = useState([]);
  //for spinner
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // function that getting data for every page
    const fetchData = async () => {
      let dataArr = [];
      try {
        setIsLoading(true);
        for (let i = 1; i < 8; i++) {
          const response = await fetch(
            `https://rickandmortyapi.com/api/location?page=${i}`
          );
          const data = await response.json();
          dataArr.push(data.results);
        }
        setLocationsData(dataArr.flat());
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ locationsData, isLoading }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
