import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualizarUsuarioAction } from "../store/actions/user";
import { Container, ContTable, DeleteBtn } from "./SecondStyles";

const SecondChallenge = () => {
  const users = useSelector((state) => state.user.users);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const actualizarUsuario = (list) => dispatch(actualizarUsuarioAction(list));

  const searchByFirstName = (SName) => {
    setSearch(SName);
  };

  const orderByAge = (value) => {
    let list = [...users];
    const sorted = list.sort((a, b) => {
      if (a.age < b.age) return value === "ascendente" ? -1 : 1;

      if (a.age > b.age) return value === "ascendente" ? 1 : -1;

      return 0;
    });
    actualizarUsuario(sorted);
  };

  const deleteUser = (id) => {
    let list = [...users];
    const index = list.findIndex((x) => x.id === id);
    list.splice(index, 1);
    actualizarUsuario(list);
  };

  return (
    <Container>
      <div className="contTitle">
        <h3 className="title"> Second Challenge </h3>
      </div>
      <div className="contTitle">
        <h1 className="title"> Lista de usuarios </h1>
      </div>
      <div className="contSearch">
        <input
          onChange={(e) => searchByFirstName(e.target.value)}
          type="text"
          name="search"
          placeholder="Buscar por nombre"
        />
        <select onChange={(e) => orderByAge(e.target.value)} name="edad" id="">
          <option value="">Seleccione Rango de edad</option>
          <option value="ascendente">de menor a mayor</option>
          <option value="descendente">de mayor a menor</option>
        </select>
      </div>
      <ContTable>
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Avatar </th>
              <th> Nombre </th>
              <th> Apellido </th>
              <th> Edad </th>
              <th> Accion </th>
            </tr>
          </thead>

          <tbody>
            {users
              .filter((x) =>
                x.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>
                    {" "}
                    <img src={user.avatar} alt="avatar" />{" "}
                  </td>
                  <td> {user.firstName} </td>
                  <td> {user.lastName} </td>
                  <td> {user.age} </td>
                  <td>
                    <DeleteBtn onClick={() => deleteUser(user.id)} >
                      Eliminar
                    </DeleteBtn>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </ContTable>
    </Container>
  );
};

export default SecondChallenge;
