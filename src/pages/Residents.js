import React from 'react';
import { useLocation } from 'react-router-dom';

const Residents = () => {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
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
