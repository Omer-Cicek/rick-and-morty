import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Residents = () => {
  let dataArr = [];
  const [dataResidents, setDataResidents] = useState([]);

  const { id } = useParams();

  const fetchResidents = async (api) => {
    const response = await fetch(`${api}`);
    const data = await response.json();
    dataArr = [...dataArr, data];
  };
  const value = useContext(AppContext);

  const filteredLocations = value.filter((item) => {
    return item.id == id;
  });

  useEffect(() => {
    filteredLocations[0]?.residents?.map((item) => {
      return fetchResidents(item);
    });
    console.log('renderlandı');
  }, []);

  return (
    <div className="container ">
      {[1, 2].map((item) => {
        return (
          <div className="row" key={item?.id}>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
              <div className="card">
                <img src={item?.image} alt="asdas" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">test1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt architecto ex soluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Residents;
