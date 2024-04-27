import styled from "styled-components";
import logo from "/logo.png";
import { COLEGIO_NAME } from "../../../var/colegioData";
const StyledSideBarHeader = styled.header`
  margin: 2rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .nombre-colegio {
    font-size: ${({ theme }) => theme.fontSizes.headers.small};
    text-align: center;
  }
  .intranet {
    font-size: ${({ theme }) => theme.fontSizes.headers.small};
    margin-top: -1rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.indigo.normal};
  }
  .image {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img {
    width: 60px;
  }
`;

export default function SideBarHeader() {
  return (
    <StyledSideBarHeader>
      <span className="image">
        <img src={logo} alt="colegio-logo"></img>
      </span>
      <span className="nombre-colegio">{COLEGIO_NAME}</span>
      <span className="intranet">INTRANET</span>
    </StyledSideBarHeader>
  );
}
