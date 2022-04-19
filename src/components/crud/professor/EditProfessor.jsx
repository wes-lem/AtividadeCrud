import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { professores } from "./data.js";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const params = useParams();

  useEffect(() => {
    const professor = professores[params.id];
    setName(professor.name);
    setCourse(professor.course);
    setIra(professor.ira);
  }, [params.id]);

  const handleSubmit = (event) => {
    //aqui código de comunicação com o backend
    alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`);
  };

  return (
    <div>
      <h2>Editar Estudante</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-control"
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessor;
