import { connect } from 'dva'
import { Component } from 'react'
import { Tabs, Form, Input, Row, Col, Button, Table } from 'antd'

const columns = [{
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '电话',
  dataIndex: 'phone'
}, {
  title: '地址',
  dataIndex: 'address'
}]

const data = []

for(let i = 0; i < 27; i++){
  data.push({
    key: i,
    name: `show`,
    age: Math.floor(Math.random() * 30),
    phone: '18106567219',
    address: 'zjhz'
  })
}

class Users extends Component {
  constructor(props){
    super(props)
  }
  handleSearch = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(!err){
        console.info(values)
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const queryArr = [{key: 'name', label: '姓名'}, {key: 'phone', label: '电话'}, {key: 'age', label: '年龄'}]
    const children = []
    for(let i = 0; i < 3; i++){
      children.push(
        <Col span={8} key={i}>
          <Form.Item {...formItemLayout} label={queryArr[i].label}>
            {
              getFieldDecorator(queryArr[i].key)(
                <Input placeholder="placeholder" />
              )
            }
          </Form.Item>
        </Col>
      )
    }

    return (
      <div>
        <Form onSubmit={this.handleSearch} >
          <Row>
            {children}
          </Row>
          <Row>
            <Col span={24} style={{textAlign: 'right'}}>
              <Button type="primary" htmlType="submit">查询</Button>
            </Col>
          </Row>
        </Form>
        <Tabs>
          <Tabs.TabPane tab="黑名单" key="1">
            <Table columns={columns} dataSource={data}  />
          </Tabs.TabPane>
          <Tabs.TabPane tab="白名单" key="2">
            <Table columns={columns} dataSource={data}  />
          </Tabs.TabPane>
          <Tabs.TabPane tab="可疑名单" key="3">
            <Table columns={columns} dataSource={data}  />
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

export default connect()(Form.create()(Users))
