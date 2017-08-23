import React, { Component } from 'react';
import { Segment, List, Icon } from 'semantic-ui-react';

class DatasetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false
    }
    this.toggle_visibility = this.toggle_visibility.bind(this);
  }
  toggle_visibility() {
    this.setState(function(prev) {
      return { contentVisible: !prev.contentVisible };
    });
  }
  render() {
    const dataInfo = this.props.dataInfo;
    return (
      <List.Item>
        <a onClick={this.toggle_visibility}>
          <Icon color='orange' name={
            this.state.contentVisible ?
              'angle down' : 'angle right'
          } />
        </a>
        <a href={dataInfo.link} target="_blank">
          {dataInfo.name}
        </a>
        { this.state.contentVisible ? 
            <Segment className='datasetViewDropdown'>
              <p>adfdfd asdf asdf</p>
            </Segment> : null
        }
     </List.Item>
    );
  }
}

export default DatasetView;


