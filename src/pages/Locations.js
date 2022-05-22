import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Locations = () => {
  const navigate = useNavigate();

  // getting data with context api
  const value = useContext(AppContext);

  // navigate to residents page and sending id with router
  const handleClick = (item) => {
    navigate('/residents/' + item.id, { state: { id: item.id } });
  };

  return (
    <Table size="md" responsive className="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Locations</th>
          <th>Type</th>
          <th>Dimension</th>
          <th>Resident Count</th>
        </tr>
      </thead>
      {/* spinner while data loading */}
      {value.isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {/* if we have data */}
      {value?.locationsData?.map((item) => {
        return (
          <tbody
            key={item.id}
            onClick={() => handleClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.dimension}</td>
              <td>{item.residents.length}</td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default Locations;
