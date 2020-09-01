import React from "react";
import { Page, PageSection } from '@patternfly/react-core';
import { Sidebar } from '../components/Sidebar';
import TopNav from "../components/TopNav";

const HomePage = () => (
  <Page header={<TopNav />} sidebar={<Sidebar />} isManagedSidebar>
    <PageSection>
      <h1>Home Page</h1>
      <h2>Welcome to the future!</h2>
      <p>
        <em>a page being provided by Single Sign On</em>
      </p>
    </PageSection>
  </Page>
);

export default HomePage;
