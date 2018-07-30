import * as React from 'react';
import './Topbar.css'

import { Button, Row } from 'antd';

export interface ITopbarProps {
  name: string,
  quit: () => void
}

class Topbar extends React.Component {

  public props: {
    name: string,
    quit: () => void,
  }

  public render() {
    return (
      <Row justify="end" type="flex" align="middle" className="top-row">
        <div className="name">{this.props.name}</div>
        <Button onClick={this.props.quit}>退出</Button>
      </Row>
    )
  }
}

export default Topbar;