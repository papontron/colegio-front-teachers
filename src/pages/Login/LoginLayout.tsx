import styled from "styled-components";

export const LoginLayout = styled.div`
  display: grid;
  min-height: 100dvh;
  grid-template-columns: minmax(2rem, 1fr) repeat(8, minmax(auto, 18rem)) minmax(
      2rem,
      1fr
    );
  grid-template-rows: auto 1fr auto;
`;
