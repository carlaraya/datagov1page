import React, { Component } from 'react';
import { Sidebar, Segment, Container, Button, Menu, Image, Icon, Header, List } from 'semantic-ui-react';
import axios from 'axios';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDataInfos: []
    };
    // fetch all data
    axios.get('/api/get_all').then(function(axiosResponse) {
      this.setState(function() {
        return { allDataInfos: axiosResponse.data };
      });
    }.bind(this)).catch(console.log);
  }
  render() {
    const displayedDataInfos = this.state.allDataInfos;
    return (
      <div>
        <Menu fixed='left' size='small' vertical inverted>
          <Menu.Item>
            <Menu.Header>Data.Gov.PH in One Page</Menu.Header>
          </Menu.Item>
          <Menu.Item>
            <p>This is a webapp that gets all datasets info from <a href='http://data.gov.ph'>data.gov.ph</a> and displays it in a more compact format.</p>
            <p><a href='https://github.com/carlaraya/datagov1page' target='_blank'>Source</a></p>
          </Menu.Item>
        </Menu>
        <Content dataInfos={displayedDataInfos}></Content>
      </div>
    );
  }
}

export default App;
