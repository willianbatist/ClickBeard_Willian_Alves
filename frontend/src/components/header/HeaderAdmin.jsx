import { HeaderContainer, NavContainer } from "./headerAdmin.styles";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>
            <Link id="se" to="/">Barbeiros</Link>
          </li>
          <li>
            <Link>Agendamentos</Link>
          </li>
          <li>
            <Link to="register-barber">Cadastrar</Link>
          </li>
          <li>
            <Link to="/login">Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}

export default HeaderAdmin;
