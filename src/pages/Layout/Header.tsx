import styled from 'styled-components';
import { screenBreakingPoint, theme } from '../../config/styled/styled';
import { BiCog, BiLogOut, BiMenu } from 'react-icons/bi';
import { useProfesor } from '../../hooks/useProfesor';
import { Icon } from '../../components/Shared/Icon/Icon';
import { HandleLogOut } from '../../utils/axiosUtils';

const HeaderContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .content {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    font-size: 3rem;
  }
  .left-side {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (width>${screenBreakingPoint}) {
    grid-column: 2 / 3;
    .toggle {
      display: none;
    }
    .left-side {
      font-size: 1.8rem;
    }
    .hamburger {
      display: none;
    }
  }
`;

export default function Header() {
  const profesor = useProfesor((state) => state.profesor);
  return (
    <HeaderContainer>
      <div className="left-side">
        <Icon
          $width="40px"
          $borderRadius="50%"
          $small
          $bgColor={theme.colors.gray.light}
          $pointer
          $primary
          onClick={() => toggleSideBar()}
          className="hamburger">
          <BiMenu />
        </Icon>
        {profesor?.apellidos + ' ' + profesor?.nombres}
      </div>
      <div className="content">
        <Icon $width="40px" $borderRadius="50%" $small $pointer $bgColor={theme.colors.gray.light}>
          <BiCog />
        </Icon>
        <Icon $width="40px" $borderRadius="50%" $small $bgColor={theme.colors.gray.light} $pointer $danger onClick={() => HandleLogOut()}>
          <BiLogOut />
        </Icon>
      </div>
    </HeaderContainer>
  );
  function toggleSideBar() {
    const sidebar = document.getElementById('sidebar');
    sidebar!.style.display = 'block';
  }
}
