import React from 'react';
import { PageSidebar, Nav, NavItem, NavList } from '@patternfly/react-core';
import { Link } from "react-router-dom";
import localRoutes from "../routes";

export const Sidebar = () => (
  <PageSidebar nav={
    <Nav>
      <NavList>
        {localRoutes.map(({ text, path }) => (
          <NavItem key={path}>
            <Link to={path}>{text}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  } />
);
