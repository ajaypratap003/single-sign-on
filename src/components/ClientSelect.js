import React, {useState, useEffect} from 'react';
import {
    Button,
    Divider,
    Bullseye,
    ClipboardCopy,
    Grid,
    GridItem,
    Select,
    SelectOption,
    SelectVariant,
    Spinner,
    TextInput,
    Title, 
    TitleSizes 
  } from '@patternfly/react-core';
import './ClientSelect.css';

export default () => {
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
    
    const connectToSSO = () => {
      setTimeout(() => {
        setSsoConnect(false)
      }, 10000);
    }

    useEffect(() => {
        connectToSSO();
    }, [check3]);
  
    const options2 = [
      { value: 'Choose...', disabled: false, isPlaceholder: true },
      { value: 'Singlespa', disabled: false },
      { value: 'Master', disabled: false },
      { value: 'APIs', disabled: false }
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
      <React.Fragment>
        <div className="sso-product">
        <div className="sso-title">
            <p><b>REDHAT</b> SINGLE SIGN-ON</p>
            <p><b>Account:</b> RH-test (<a>change</a>)</p>
        </div>
        {ssoConnect &&
            <div className="sso-empty-state">
                <Spinner/>
                <Title headingLevel="h3" size={TitleSizes['sm']} className="sso-empty-title">
                    Connecting to your RHSSO account
                </Title>
            </div>
        }
        { !ssoConnect &&
        <React.Fragment>
            <Title headingLevel="h2" size={TitleSizes['md']}>
              Select a Realm account from your RHSSO:
            </Title>
            <Select
              variant={SelectVariant.single}
              onSelect={onSelect2}
              selections={select2}
              onToggle={onToggle2} 
              isOpen={isOpen2}
              className="select-sso"
            >
                <SelectOption key={10}>
                    <Button isInline variant="link">
                        Create new...
                    </Button>
                    <Divider/>
                </SelectOption>
              {options2.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  isPlaceholder={option.isPlaceholder}
                />
              ))}
            </Select>
          </React.Fragment>
          }
          { select2 === 'Singlespa' &&
            <React.Fragment>
              <Title headingLevel="h2" size={TitleSizes['md']} className="selectClient">
                Select a Client from the Realm account selected above:
              </Title>
              <Select
                variant={SelectVariant.single}
                onSelect={onSelect3}
                selections={select3}
                onToggle={onToggle3} 
                isOpen={isOpen3}
                className="select-sso"
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
            </React.Fragment>
          }
          { select3 === '3scale-admin' &&
              <Grid hasGutter className="clientID">
                <GridItem span={6}>
                    ClientID
                    <ClipboardCopy isReadOnly>3scale-admin</ClipboardCopy>
                </GridItem>
              <GridItem span={6}>
                Client Secret
                <ClipboardCopy isReadOnly>6ab18253-be8b-42f8-a12a-d4a5758be11a</ClipboardCopy>
              </GridItem>
            </Grid>
          }
            </div>
          </React.Fragment>
    );
};