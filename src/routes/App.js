import { Component } from 'react'
import { connect } from 'dva'
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Modal } from 'antd'
import { Link, browserHistory } from 'dva/router'
const { Header, Content, Footer, Sider } = Layout

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      modalVisible: false
    }
  }
  onCollapse = collapsed => {
    this.setState({ collapsed })
  }
  handleLogout = () => {
    this.props.dispatch({type: 'index/logout'})
  }
  showModal = () => {
    this.setState({modalVisible: true})
  }
  hideModal = () => {
    this.setState({modalVisible: false})
  }
  render(){
    return (
      <Layout style={{height: '100%'}}>
        <Modal title="操作确认" visible={this.state.modalVisible} onOk={this.handleLogout} onCancel={this.hideModal}>
          <p>确认退出当前账户吗？</p>
        </Modal>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Dropdown overlay={<Menu onClick={this.showModal}><Menu.Item key="1">退出登陆</Menu.Item></Menu>}>
            <a style={{float: 'right', marginRight: 30}}><Icon type="user" />您好, {sessionStorage.nickName}</a>
          </Dropdown>
        </Header>
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
                  <span className="nav-text">仪表盘</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/main/users">
                  <Icon type="video-camera" />
                  <span className="nav-text">用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/main/about">
                  <Icon type="upload" />
                  <span className="nav-text">关于</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                {
                  this.props.routes.map((route, index) => <Breadcrumb.Item key={route}>{route.name}</Breadcrumb.Item>)
                }
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              SS Admin ©2016 Created by Showonne
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({index}) => ({index}))(App)
