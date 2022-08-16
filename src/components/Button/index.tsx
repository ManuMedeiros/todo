import React from "react";
import * as S from "./styles";

interface Props {
  google?: boolean;
  text: string;
  onClick: () => void;
}

const Button = ({ google, text, onClick }: Props) => {
  return (
    <>
      {!google ? (
        <S.ButtonLog onClick={onClick}>{text}</S.ButtonLog>
      ) : (
        <S.ButtonGoogle onClick={onClick}>{`${text}`}</S.ButtonGoogle>
      )}
    </>
  );
};

export default Button;
