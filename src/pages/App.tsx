import React from 'react';
import './App.scss';

import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

import { Layout } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router';
import { routes } from '../router/router';
import { connect } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component<
  RouteComponentProps & BaseState,
  {
    navs: object[];
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      navs: [
        {
          icon: 'user',
          key: '',
          name: '首页',
        },
        {
          icon: 'user',
          key: 'user',
          name: '用户管理',
        },
        {
          icon: 'post',
          key: 'post',
          name: '帖子管理',
        },
        {
          icon: 'column',
          key: 'column',
          name: '板块管理',
        },
      ],
    };
  }

  public quit() {
    window.console.log('allll');
  }

  public render() {
    const { user } = this.props
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className="sider"
          // onBreakpoint={broken => {
          //   console.log(broken)
          // }}
          // onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type)
          // }}
        >
          <Sidebar navs={this.state.navs} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Topbar name={'hello! ' + user.username} quit={this.quit} />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {routes()}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Nga manage demo</Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: BaseState) => ({
  ...state
})

export default connect(mapStateToProps)(withRouter(App));
