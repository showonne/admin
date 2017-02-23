import { connect } from 'dva'
import { Component } from 'react'
import { Card, Col, Row, Icon, Table, Timeline } from 'antd'
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, PieChart, Pie, Cell } from 'recharts'
import styles from '../assets/css/indexPage.css'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender'
}]

const data = [{
  key: 0,
  name: 'showonne',
  age: 20,
  gender: 'Male'
}, {
  key: 1,
  name: 'Li Lei',
  age: 18,
  gender: 'Male'
}, {
  key: 2,
  name: 'Han Meimei',
  age: 16,
  gender: 'Female'
}]

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      visitData: [{
        name: '1',
        pv: 10000,
        uv: 2000
      }, {
        name: '2',
        pv: 20000,
        uv: 5000
      }, {
        name: '3',
        pv: 5000,
        uv: 10000
      }, {
        name: '4',
        pv: 20000,
        uv: 3000
      }, {
        name: 5,
        pv: 1000,
        uv: 6000
      }],
      pieValue: [{
        name: 1,
        value: 200
      }, {
        name: 2,
        value: 100
      }, {
        name: 3,
        value: 400
      }, {
        name: 4,
        value: 1000
      }]
    }
  }
  componentDidMount(){
  }
  render(){
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card className={styles.flexcard}>
              <Icon type="user" style={{fontSize: '50px', color: '#b58ad5', float: 'left'}} />
              <div style={{float: 'left', marginLeft: '20px', width: '110px'}}>
                <h2>用户数量</h2>
                <h1 className={styles.textell}>6,000,000</h1>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card className={styles.flexcard}>
              <Icon type="message" style={{fontSize: '50px', color: '#1de9b6', float: 'left'}} />
              <div style={{float: 'left', marginLeft: '20px', width: '110px'}}>
                <h2>未读消息</h2>
                <h1 className={styles.textell}>580</h1>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card className={styles.flexcard}>
              <Icon type="pay-circle" style={{fontSize: '50px', color: '#5677fc', float: 'left'}} />
              <div style={{float: 'left', marginLeft: '20px', width: '110px'}}>
                <h2>今日交易额</h2>
                <h1 className={styles.textell}>999,999,999</h1>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card className={styles.flexcard}>
              <Icon type="shopping-cart" style={{fontSize: '50px', color: '#6e5b50', float: 'left'}} />
              <div style={{float: 'left', marginLeft: '20px', width: '110px'}}>
                <h2>商品交易件数</h2>
                <h1 className={styles.textell}>1,999</h1>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{marginTop: '50px'}}>
          <Col span={18}>
            <Card>
              <LineChart width={730} height={250} data={this.state.visitData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <PieChart width={180} height={250}>
                <Pie data={this.state.pieValue} fill="#82ca9d"/>
                <Tooltip/>
              </PieChart>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{marginTop: '50px'}}>
          <Col span={18}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Col>
          <Col span={6}>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              <Timeline.Item>Services is running 2015-09-01</Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect()(Dashboard)
