import styled, { css } from "styled-components";
import { Container } from "../Container/Container";
import { Icon } from "../Icon/Icon";
import { RefObject, forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputProps } from "./types";

export const InputContainer = styled.div<{
  $vertical?: boolean;
  $width: string;
}>`
  display: flex;
  width: ${({ $width }) => $width};
  .input-icon {
    background-color: white;
    height: 30px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray.dark};
    padding-top: 5px;
    padding-inline: 4px;
  }
  input {
    height: 30px;
    padding: ${({ theme }) => theme.paddings.normal};
    font-size: ${({ theme }) => theme.fontSizes.text.normal};
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray.dark};
  }
  label {
    color: white;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.text.large};
  }
  ${({ $vertical }) => {
    if ($vertical) {
      return css`
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.2rem;
        input {
          width: 100%;
        }
      `;
    } else {
      return css`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        input {
          flex-grow: 1;
        }
      `;
    }
  }};
`;

const Input = forwardRef(function (Props: InputProps, ref) {
  const { name, label, vertical, type, width, icon, ...rest } = Props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputContainer $vertical={vertical} $width={width}>
      <label htmlFor={name}>{label}</label>
      <Container $gap="0" $direction={"row"} $center $width="100%">
        {icon != undefined && (
          <Icon className="input-icon" $small $width="20px">
            {icon}
          </Icon>
        )}
        <input
          {...rest}
          ref={ref as RefObject<HTMLInputElement>}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          id={name}
        />
        {type === "password" && (
          <Icon
            $pointer
            $primary
            $small
            $width="20px"
            className="input-icon"
            onClick={() => setShowPassword((old) => !old)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Icon>
        )}
      </Container>
    </InputContainer>
  );
});

export default Input;
