import React from "react";
import * as S from "./styles";

interface Props {
  title: string;
  typeName: "email" | "password";
  onChange: () => void;
  value: string;
}

const InputLog = ({ title, typeName, onChange, value }: Props) => {
  return (
    <>
      {typeName === "email" && (
        <>
          <S.Title>{title}</S.Title>
          <S.Input
            type="email"
            placeholder="digite seu email..."
            value={value}
            onChange={onChange}
          />
        </>
      )}
      {typeName === "password" && (
        <>
          <S.Title>{title}</S.Title>
          <S.Input
            type="email"
            placeholder="digite sua senha..."
            value={value}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
};

export default InputLog;
