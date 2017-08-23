import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Header, List } from 'semantic-ui-react';

class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Segment basic>
          <Header as='h3'>Datasets</Header>
          <List>
            {
              this.props.dataInfos.map(function(dataInfo) {
                return (
                  <List.Item key={dataInfo._id}>
                    <a href={dataInfo.link} >
                      {dataInfo.name}
                    </a>
                  </List.Item>
                )
              })
            }
          </List>
        </Segment>
      </div>
    );
  }
}

export default Content;
