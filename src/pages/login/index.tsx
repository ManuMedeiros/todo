import React from "react";
import Button from "../../components/Button";
import InputLog from "../../components/InputLog";
import * as S from "./styles";

const Login = () => {
  return (
    <S.Container>
      <S.DivInput>
        <div className="div-title">
          <S.Title>Bem Vindo de volta</S.Title>
          <S.SubTitle>
            Bem vindo de volta, por favor entre com suas informções
          </S.SubTitle>
        </div>
        <div className="div-title">
          <div className="inputs">
            <InputLog
              typeName="email"
              title="E-mail"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="inputs">
            <InputLog
              typeName="password"
              title="Password"
              value=""
              onChange={() => {}}
            />
            <a href="/" className="link">
              Esqueci minha senha
            </a>
            <Button text="Entrar" onClick={() => {}} />
            <Button text="Entrar com o Google" onClick={() => {}} google />
            <p className="new-accont">
              Ainda não tem conta? <a href="/">Criar Conta</a>
            </p>
          </div>
        </div>
      </S.DivInput>
    </S.Container>
  );
};

export default Login;
