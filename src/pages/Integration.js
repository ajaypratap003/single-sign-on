import React, {useState} from "react";
import {
  Alert,
  Bullseye,
  Button,
  Card, 
  CardBody,
  Grid,
  GridItem,
  Select,
  SelectOption,
  SelectVariant,
  DropdownItem,
  PageSection, 
  Radio,
  Spinner,
  TextInput,
  Text,
  TextContent,
  TextVariants,
  Title, 
  TitleSizes 
} from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

const Integration = () => {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [select1, setSelect1] = useState(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const [select2, setSelect2] = useState(null);
  const [isOpen3, setIsOpen3] = useState(false);
  const [select3, setSelect3] = useState(null);
  const [valueOpenIDConnectIssuer, setValueOpenIDConnectIssuer] = useState('');
  const [ssoConnect, setSsoConnect] = useState(true);

  const handleChange1 = () => {
    setCheck1(!check1);
  };

  const handleChange2 = () => {
    setCheck2(!check2);
  };

  const handleChange3 = () => {
    setCheck3(!check3);
  };

  const options1 = [
    { value: 'Choose...', disabled: false, isPlaceholder: true },
    { value: 'REST API', disabled: false },
    { value: 'Red Hat Single Sign-On', disabled: false }
  ];

  const onToggle1 = isOpen1 => {
    setIsOpen1(isOpen1);
  };

  const onSelect1 = (event, selection, isPlaceholder) => {
    if (isPlaceholder) this.clearSelection();
    else {
      setIsOpen1(!isOpen1);
      setSelect1(selection);
      connectToSSO();
    }
  };

  const connectToSSO = () => {
    setTimeout(() => {
      setSsoConnect(false)
    }, 3000);
  }

  const options2 = [
    { value: 'Choose...', disabled: false, isPlaceholder: true },
    { value: 'Master', disabled: false },
    { value: 'APIs', disabled: false },
    { value: 'Singlespa', disabled: false }
  ];

  const onToggle2 = isOpen2 => {
    setIsOpen2(isOpen2);
  };

  const onSelect2 = (event, selection, isPlaceholder) => {
    if (isPlaceholder) this.clearSelection();
    else {
      setIsOpen2(!isOpen2);
      setSelect2(selection);
    }
  };

  const options3 = [
    { value: 'Choose...', disabled: false, isPlaceholder: true },
    { value: '3scale-admin', disabled: false },
    { value: 'account-console', disabled: false },
    { value: 'admin-cli', disabled: false },
    { value: 'broker', disabled: false },
    { value: 'realm-management', disabled: false },
    { value: 'security-admin-console', disabled: false }
  ];

  const onToggle3 = isOpen3 => {
    setIsOpen3(isOpen3);
  };

  const onSelect3 = (event, selection, isPlaceholder) => {
    if (isPlaceholder) this.clearSelection();
    else {
      setIsOpen3(!isOpen3);
      setSelect3(selection);
    }
  };

  return (
    <PageSection>
      <Title headingLevel="h1" size={TitleSizes['2xl']}>
        Authentication
      </Title>
      <Card>
        <CardBody>
      <Title headingLevel="h2" size={TitleSizes['md']}>
        Select an Authentication method:
      </Title>
        <Radio
          isChecked={check1}
          onChange={handleChange1}
          label="API Key (user_key)"
          id="radio-uncontrolled-1"
          name="radio-1"
          description="The application is identified & authenticated via a single string."
        />
        <Radio
          isChecked={check2}
          onChange={handleChange2}
          label="App_ID and App_Key Pair"
          id="radio-uncontrolled-2"
          name="radio-2"
          description="The application is identified via the App_ID and authenticated via the App_Key."
          />
        <Radio
          isChecked={check3}
          onChange={handleChange3}
          label="OpenID Connect"
          id="radio-uncontrolled-3"
          name="radio-3"
          description="Use OpenID Connect for any OAuth 2.0 flow."
        />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Title headingLevel="h2" size={TitleSizes['md']}>
            OpenID Connect Basics
          </Title>
          <Select
            variant={SelectVariant.single}
            onSelect={onSelect1}
            selections={select1}
            onToggle={onToggle1} 
            isOpen={isOpen1}
          >
            {options1.map((option, index) => (
              <SelectOption
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                isPlaceholder={option.isPlaceholder}
              />
            ))}
          </Select>
        </CardBody>
      </Card>
      <Card>
      { select1 === 'Red Hat Single Sign-On' && ssoConnect &&
        <CardBody>
          <React.Fragment>
            <Bullseye>
              <Spinner/>
            </Bullseye>
            <Bullseye>
              <Title headingLevel="h3" size={TitleSizes['sm']}>
                Connecting to your RHSSO account
              </Title>
            </Bullseye>
            </React.Fragment>
        </CardBody>
        }
      </Card>
      { !ssoConnect &&
        <Card style={{ backgroundColor: "#E4EFFF"}}>
          <CardBody>
            <Title headingLevel="h2" size={TitleSizes['md']}>
              Select a Realm account from your RHSSO:
            </Title>
            <Select
              variant={SelectVariant.single}
              onSelect={onSelect2}
              selections={select2}
              onToggle={onToggle2} 
              isOpen={isOpen2}
            >
              {options2.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  isPlaceholder={option.isPlaceholder}
                />
              ))}
            </Select>
          </CardBody>
          { select2 === 'Singlespa' &&
            <CardBody>
              <Title headingLevel="h2" size={TitleSizes['md']}>
                Select a Client from the Realm account selected above:
              </Title>
              <Select
                variant={SelectVariant.single}
                onSelect={onSelect3}
                selections={select3}
                onToggle={onToggle3} 
                isOpen={isOpen3}
              >
                {options3.map((option, index) => (
                  <SelectOption
                    isDisabled={option.disabled}
                    key={index}
                    value={option.value}
                    isPlaceholder={option.isPlaceholder}
                  />
                ))}
              </Select>
            </CardBody>
          }
          { select3 === '3scale-admin' &&
            <CardBody>
              <Grid hasGutter>
                <GridItem span={6}>
                    ClientID
                  <TextInput id="text-1" isDisabled type="text" value="3scale-admin" />
                </GridItem>
              <GridItem span={6}>
                Client Secret
                <TextInput id="text-2" isDisabled type="text" value="6ab18253-be8b-42f8-a12a-d4a5758be11a" />
              </GridItem>
              </Grid>
            </CardBody>
          }
        </Card>
      }
      <Card>
        <CardBody>
          <Title headingLevel="h2" size={TitleSizes['md']}>
            OpenID Connect Issuer
          </Title>
          { select3 === '3scale-admin' &&
            <Alert variant="info" isInline title="Click on Complete endpoint to use your OpenID credentials." />
          }
          <Grid hasGutter>
            <GridItem span={10}>
              <TextInput 
                id="text-3"
                type="text"
                value={valueOpenIDConnectIssuer}
                placeholder="https://<CLIENT_ID>:<CLIENT_SECRET>@<HOST>:<PORT>/auth/realms/<REALM_NAME>"
              />
            </GridItem>
            <GridItem span={2}>
              <Button variant="primary" onClick={() => setValueOpenIDConnectIssuer('https://3scale-admin:6ab18253-be8b-42f8-a12a-d4a5758be11a@localhost:8080/auth/realms/singlespa')}>
                Complete Endpoint
              </Button>
            </GridItem>
          </Grid>
          <TextContent>
            <Text component={TextVariants.small}>
              Location of your OpenID Provider. The format of this endpoint is determined on your OpenID Provider setup.
            </Text>
          </TextContent>
        </CardBody>
      </Card>
      <Button variant="primary">
        Update API
      </Button>
    </PageSection>
  )
};

export default Integration;
