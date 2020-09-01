import React from "react";
import { Page, PageSection, Title, TitleSizes } from '@patternfly/react-core';
import { Sidebar } from '../components/Sidebar';
import TopNav from "../components/TopNav";

const SSO = () => {

  const columns = [
    { title: 'Header cell' },
    'Branches',
    { title: 'Pull requests' },
  ];

  const rows = [['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four']];

  return (
    <Page header={<TopNav />} sidebar={<Sidebar />} isManagedSidebar>
      <PageSection>
        <Title headingLevel="h3" size={TitleSizes['2xl']}>
          Clients
        </Title>
        {/* <Table cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table> */}
      </PageSection>
  </Page>
  )
};

export default SSO;
