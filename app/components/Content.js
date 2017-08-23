import React, { Component } from 'react';
import { Accordion, Sidebar, Segment, Menu, Header, List } from 'semantic-ui-react';
import DatasetView from './DatasetView';

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Segment basic>
          <Header as='h3'>Datasets</Header>
          <List>
            { this.props.dataInfos ?
              this.props.dataInfos.map(function(dataInfo) {
                return (
                  <DatasetView
                    dataInfo={dataInfo} key={dataInfo._id} />
                )
              }) : <p>w8 lang...</p>
            }
          </List>
        </Segment>
      </div>
    );
  }
}

export default Content;
