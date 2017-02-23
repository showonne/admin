import { Component } from 'react'
import { connect } from 'dva'
import { Row, Col, Form, Input, Icon, Button, Alert, Card } from 'antd'

import styles from '../assets/css/indexPage.css'

const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field])

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state = {error: false}
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(!err){
        this.props.dispatch({type: 'index/login', payload: values})
      }
    })
  }
  onClose = () => {
    this.props.dispatch({type: 'index/dismissError'})
  }
  componentDidMount(){
    console.log(this.props.history)
    if(sessionStorage.userName){
      this.props.history.push('/main/dashboard')
    }
    this.props.form.validateFields()
  }
  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    let alert = this.props.index.errorInfo ? <Alert message={this.props.index.errorInfo} closable type="error" onClose={this.onClose} /> : ''
    return (
      <div className={styles.h100p}>
        <Row type="flex" align="middle" className={styles.h100p}>
          <Col span={6} offset={9}>
            <Card className={styles.opcityBg}>
              <div style={{fontSize: 100, textAlign: 'center'}}>
              <Icon type="setting" className={styles.rotate} />
              </div>
              <h2 style={{textAlign: 'center'}}>Admin System.</h2>
              <Form onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={userNameError ? 'error' : ''}>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(
                    <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                  )}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''}>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }]
                  })(
                    <Input addonBefore={<Icon type="lock"/>} placeholder="Password" type="password" />
                  )}
                </Form.Item>
                { alert }
                <Button type="primary" htmlType="submit" style={{width: '100%'}} loading={this.props.index.loading} disabled={hasErrors(getFieldsError())}>{this.props.index.loading ? '请等待...' : '登陆'}</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({index}) => ({index}))(Form.create()(IndexPage))
