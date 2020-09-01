import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Nav, NavItem, NavList } from '@patternfly/react-core';

const TopNav = () => (
  <PageHeader showNavToggle topNav={(
    <Nav variant="horizontal">
      <NavList>
        <NavItem>
          <Link to="/">App 1</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">App 2</Link>
        </NavItem>
      </NavList>
    </Nav>
  )} />
);

export default TopNav;
