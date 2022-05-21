import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Locations = () => {
  const navigate = useNavigate();

  const value = useContext(AppContext);

  const handleClick = (item) => {
<<<<<<< HEAD
    navigate('/residents/' + item.id, { state: { id: item.id } });
    console.log();
=======
    navigate('/residents/' + item.id, { state: { item } });
>>>>>>> d8eb43c160e398b8a4c5a27c900d64cc42309e80
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
      {value.map((item) => {
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
