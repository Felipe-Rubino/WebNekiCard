import { ButtonProfile, HeaderContainer, HeaderContent, Imagem } from "./style";
import logoImg from "../../assets/images/neki.png";
import {
  BsFillPersonPlusFill,
  BsDoorOpenFill,
  BsFillGearFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";

export function Header() {

  const context = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigationLogin() {
    navigate('/Login')
  }

  function handleNavigationProfile() {
    navigate('/Register')
  }

  function handleLogout() {
    context.logout();
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Imagem src={logoImg} alt="Logo do site" />
        <ButtonProfile onClick={handleNavigationLogin}>
          <BsFillGearFill size={30} />
        </ButtonProfile>
        <ButtonProfile onClick={handleNavigationProfile}>
          <BsFillPersonPlusFill size={30} />
        </ButtonProfile>
        <BsDoorOpenFill size={30} onClick={handleLogout}/>
      </HeaderContent>
    </HeaderContainer>
  );
}
