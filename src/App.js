import React from 'react';
import { initializeIcons } from '@uifabric/icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import './App.css';

initializeIcons();

const items = props => [
  {
    key: 'mindPlus',
    name: 'MindPlus',
    cacheKey: 'mindPlusCacheKey',
    iconProps: {
      iconName: 'Home'
    },
    ariaLabel: 'New. Use left and right arrow keys to navigate',
    ['data-automation-id']: 'homeButton',
    onClick: () => props.history.push('/')
  }
];

const farItems = props => [
  {
    key: 'addAccount',
    name: 'Add Account',
    iconProps: {
      iconName: 'AddFriend'
    },
    iconOnly: true,
    onClick: () => props.history.push('/login')
  },
  {
    key: 'manageAccount',
    name: 'Manage Account',
    iconProps: {
      iconName: 'AccountManagement'
    },
    iconOnly: true,
    onClick: () => console.log('Manage Account Clicked')
  }
];

const Head = props => (
  <div>
    <CommandBar
      items={items}
      farItems={farItems}
      ariaLabel={'Use left and right arrow keys to navigate between commands'}
    />
  </div>
);

const head = props => <Head items={items(props)} farItems={farItems(props)} />;

const About = props => (
  <Fabric>
    {head(props)}
    <div>About Page</div>
  </Fabric>
);

const Home = props => (
  <Fabric>
    {head(props)}
    <div>Home Page</div>
  </Fabric>
);

const Login = props => (
  <Fabric>
    {head(props)}
    <div>
      <Panel
        isOpen={true}
        type={PanelType.smallFluid}
        headerText="Let's get you started"
      >
        <div>
          <TextField
            label="Username:"
            underlined
            required={true}
            errorMessage={''}
            placeholder="Select a username"
          />
          <TextField
            label="Password:"
            underlined
            required={true}
            errorMessage={''}
            type="password"
            placeholder="Select a password"
          />
          <DefaultButton
            primary={true}
            text="Submit"
            iconProps={{ iconName: 'Forward' }}
            onClick={() => console.log('Submit clicked')}
          />
        </div>
      </Panel>
    </div>
  </Fabric>
);

const MindPlus = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default MindPlus;
