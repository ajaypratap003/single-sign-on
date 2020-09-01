import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Nav, NavItem, NavList } from '@patternfly/react-core';

const TopNav = () => (
  <PageHeader showNavToggle topNav={(
    <Nav variant="horizontal">
      <NavList>
        <NavItem>
          <Link to="/">Single Sign On</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">3scale</Link>
        </NavItem>
      </NavList>
    </Nav>
  )} />
);

export default TopNav;
