import React from "react";
import { Link } from "react-router-dom";

const ProfessorTableRow = (props) => {
  const { id, name, course, ira } = props.professor;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td>
        <Link to={`/editProfessor/${id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger">Apagar</button>
      </td>
    </tr>
  );
};
export default ProfessorTableRow;
