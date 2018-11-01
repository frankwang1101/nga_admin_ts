import React from 'react'

import { Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'


class Sidebar extends React.Component<{
  navs: object[];
}> {

  public menuClick(e: any) {
    window.console.log(e, this.context);
  }

  public render() {
    const menus: React.ReactNode[] = this.props.navs.map((item: any) => (
      <Menu.Item key={item.key}>
        <Link to={`/${item.key}`}>
          {item.icon ? <Icon type="user" /> : ''}
          <span className="nav-text">{item.name}</span>
        </Link>
      </Menu.Item>
    ))
    return (
      <Menu theme="dark" mode="inline" onClick={this.menuClick}>
        {menus}
      </Menu>
    )
  }
}

export default Sidebar
