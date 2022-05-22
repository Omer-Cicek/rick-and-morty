import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Residents = () => {
  const [dataResidents, setDataResidents] = useState([]);

  // getting id with router
  const { id } = useParams();

  // function that gets data foreach api
  const fetchResidents = async (api) => {
    const response = await fetch(`${api}`);
    const data = await response.json();
    setDataResidents((dataResidents) => [...dataResidents, data]);
  };

  // getting data from context api
  const value = useContext(AppContext);

  // filtering data that matches with id that comes from router
  const filteredLocations = value.locationsData.filter((item) => {
    return item.id == id;
  });

  useEffect(() => {
    filteredLocations[0]?.residents?.map((item) => {
      return fetchResidents(item);
    });
  }, []);

  return (
    <div className="container ">
      <div className="row">
        {/* if we have data  */}
        {dataResidents?.map((item) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 " key={item?.id}>
              <div className="card ">
                <img src={item?.image} alt="asdas" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title"> {item?.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Species: {item?.species}</li>
                  <li className="list-group-item">
                    Type: {item?.type ? item.type : 'Unknown'}
                  </li>
                  <li className="list-group-item">Gender: {item?.gender}</li>
                  <li className="list-group-item">
                    Origin: {item?.origin?.name}
                  </li>
                  {/* status indicator */}
                  <li className="list-group-item">
                    Status: &nbsp;
                    {item?.status === 'Dead' ? (
                      <status-indicator
                        active
                        negative
                        pulse
                      ></status-indicator>
                    ) : item?.status === 'Alive' ? (
                      <status-indicator
                        active
                        positive
                        pulse
                      ></status-indicator>
                    ) : (
                      <status-indicator
                        active
                        intermediary
                        pulse
                      ></status-indicator>
                    )}
                    {item?.status}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {/* if there is no data */}
        {dataResidents.length === 0 && (
          <h5>
            DATA NOT FOUND <Link to="/rick-and-morty/">Click to go Back</Link>
          </h5>
        )}
        {/* spinner while data loading  */}
        {value.isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Residents;
