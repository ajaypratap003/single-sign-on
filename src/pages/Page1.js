import React from "react";
import { Page, PageSection } from '@patternfly/react-core';
import { Sidebar } from '../components/Sidebar';
import TopNav from "../components/TopNav";

const Page1 = () => (
  <Page header={<TopNav />} sidebar={<Sidebar />} isManagedSidebar>
    <PageSection>
      <h1>Page 1</h1>
      <p>
        <em>another page being provided by Single Sign On</em>
      </p>
    </PageSection>
  </Page>
);

export default Page1;
