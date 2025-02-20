import React from "react";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import LogoImg from "../../assets/logo.png"

type Props ={
  showBackButton?:Boolean;
}

export function Header({showBackButton=false}:Props) {
  return (
    <Container>
     { showBackButton && <BackButton>
      <BackIcon/>
      </BackButton>}
      <Logo source={LogoImg} />
    </Container>
  );
}
