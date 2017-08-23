import React, { Component } from 'react';
import { Sidebar, Segment, Container, Button, Menu, Image, Icon, Header, List } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.test = ['List of Technical Vocational Institutions with TESDA registered programs',
      'Physical Network: Number of Automated Teller Machines',
      'BALANCE SHEET AND KEY RATIOS OF NON-BANKS WITH QUASI BANKING FUNCTIONS'];
    Array(4).fill().map(function() {this.test = this.test.concat(this.test)}, this);
    console.log(this.test);
  }

  render() {
    return (
      <div>
        <Menu fixed='left' size='small' vertical inverted>
          <Menu.Item>
            <Menu.Header>Data.Gov.PH in One Page</Menu.Header>
          </Menu.Item>
          <Menu.Item>
            <p>This is a webapp that gets all datasets info from <a href='http://data.gov.ph'>data.gov.ph</a> and displays it in a more compact format.</p>
          </Menu.Item>
        </Menu>
        <div className='content'>
          <Segment basic>
            <Header as='h3'>Datasets</Header>
            <List>
              {
                this.test.map(function(title, index) {
                  return (
                    <List.Item key={index}><a>{title}</a></List.Item>
                  )
                })
              }
            </List>
          </Segment>
        </div>
      </div>
    );
  }
}

export default App;
