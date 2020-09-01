import React from "react";
import { PageSection, Table, TableHeader, TableBody, TableVariant, Title, TitleSizes } from '@patternfly/react-core';

const SSO = () => {

  const columns = [
    { title: 'Header cell' },
    'Branches',
    { title: 'Pull requests' },
  ];

  const rows = [['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four'], ['one', 'two', 'three', 'four']];

  return (
    <PageSection>
      <Title headingLevel="h3" size={TitleSizes['2xl']}>
        Clients
      </Title>
      {/* <Table cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table> */}
    </PageSection>
  )
};

export default SSO;
