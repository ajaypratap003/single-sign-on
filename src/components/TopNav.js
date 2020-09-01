import React from "react";
import { NavLink } from "react-router-dom";
import { PageHeader, Nav, NavItem, NavList } from '@patternfly/react-core';

const TopNav = () => (
  <PageHeader showNavToggle topNav={(
    <Nav variant="horizontal">
      <NavList>
        <NavItem>
          <NavLink to="/" activeClassName="pf-m-current" exact>
            Single Sign On
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" activeClassName="pf-m-current" exact>
            3scale
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  )} />
);

export default TopNav;
