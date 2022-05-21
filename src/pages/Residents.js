<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Residents = () => {
  let dataArr = [];
  const [dataResidents, setDataResidents] = useState([]);

  const { id } = useParams();

  const fetchResidents = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    dataArr.push(data);
    console.log(data);
  };

  const value = useContext(AppContext);

  const filteredLocations = value.filter((item) => {
    return item.id === id;
  });

  useEffect(() => {
    filteredLocations[0]?.residents?.map((item) => {
      return fetchResidents(item);
    });
    setDataResidents(dataArr);
  }, []);

=======
import React from 'react';
import { useLocation } from 'react-router-dom';

const Residents = () => {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
>>>>>>> d8eb43c160e398b8a4c5a27c900d64cc42309e80
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
            <div className="card">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/166.jpeg"
                alt="asdas"
                className="card-img-top"
              />
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
      </div>
    </div>
  );
};

export default Residents;
