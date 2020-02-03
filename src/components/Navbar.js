import React from 'react';
import { Pane, Button, Text, Heading, Tab, TabNavigation } from 'evergreen-ui';

// portfolio instead of projects
// blog??
const links = ['About', 'Projects', 'Contact'];

function Navbar() {
  return (
    <Pane
      elevation={1}
      display='flex'
      padding={16}
      background='purpleTint'
      borderRadius={3}
    >
      <Pane flex={1} alignItems='center' display='flex'>
        <Heading size={600}>Logo</Heading>
      </Pane>
      <Pane>
        <TabNavigation>
          {links.map(item => (
            <Tab onSelect={() => {}}>
              <Heading size={400}>{item}</Heading>
            </Tab>
          ))}
        </TabNavigation>
      </Pane>
    </Pane>
  );
}

Navbar.propTypes = {};

export default Navbar;
