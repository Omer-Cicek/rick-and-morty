import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Residents = () => {
  const [dataResidents, setDataResidents] = useState([]);

  const { id } = useParams();

  const fetchResidents = async (api) => {
    const response = await fetch(`${api}`);
    const data = await response.json();
    setDataResidents((dataResidents) => [...dataResidents, data]);
  };
  const value = useContext(AppContext);

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
        {dataResidents.length === 0 && (
          <h5>
            DATA NOT FOUND <Link to="/">Click to go Back</Link>
          </h5>
        )}
        {value.isLoading && <h2>sadasd</h2>}
      </div>
    </div>
  );
};

export default Residents;
