import React from "react";
import { professores } from "./data";
import ProfessorTableRow from "./ProfessorTableRow";

const ListStudent = () => {
  function generateTable() {
    if (!professores) return;
    return professores.map((professor, i) => {
      return <ProfessorTableRow professor={professor} key={i} />;
    });
  }

  return (
    <div>
      <h2>Listar Estudante</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Curso</th>
          <th>IRA</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListStudent;
