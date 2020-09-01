import React from 'react';
import { PageSidebar, Nav, NavItem, NavList } from '@patternfly/react-core';
import { NavLink } from "react-router-dom";
import localRoutes from "../routes";

export const Sidebar = () => (
  <PageSidebar nav={
    <Nav>
      <NavList>
        {localRoutes.map(({ text, path }) => (
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
