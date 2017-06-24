import React from "react";
import { Grid } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = styled.header`
  background: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
`;

const Logo = styled.img`
  height: 1.5rem;
`;

const Nav = styled.nav`
  display: inline-block;
`;

const NavLink = styled(Link)`
  margin-left: 2.125rem;
  font-size: 1rem;
  line-height: 1;
  color: #3e4247;
`;

export default () => (
  <MainHeader>
    <Grid>
      <Wrapper>
        <Logo src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Logo" />
        <Nav>
          <NavLink to="/buy">Купить</NavLink>
          <NavLink to="/rent">Снять</NavLink>
          <NavLink to="/our-agents">Наши агенты</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </MainHeader>
);
