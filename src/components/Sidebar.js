import React from 'react';
import { PageSidebar, Nav, NavItem, NavList } from '@patternfly/react-core';
import { NavLink } from "react-router-dom";

export const Sidebar = ({ routes }) => (
  <PageSidebar nav={
    <Nav>
      <NavList>
        {routes.map(({ text, path }) => (
          <NavItem key={path}>
            <NavLink to={path} activeClassName="pf-m-current" exact>
              {text}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  } />
);
