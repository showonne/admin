import { Component } from 'react'
import { connect } from 'dva'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Link } from 'dva/router'
const { Header, Content, Footer, Sider } = Layout

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.BreadcrumbName}</Link>
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    }
    console.log(this.props)
    this.onCollapse = this.onCollapse.bind(this)
  }
  onCollapse(collapsed){
    this.setState({ collapsed })
  }
  render(){
    return (
      <Layout style={{height: '100%'}}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Layout style={{height: '100%'}}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark">
              <Menu.Item key="1">
                <Link to="/main/dashboard">
                  <Icon type="user" />
                  <span className="nav-text">Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/main/users">
                  <Icon type="video-camera" />
                  <span className="nav-text">Users</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/main/about">
                  <Icon type="upload" />
                  <span className="nav-text">About</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }} routes={this.props.routes} params={this.props.params} itemRender={itemRender} />
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default connect()(App)
