import React from 'react'
import { connect } from 'dva'
import { Row, Col, Form, Input, Icon, Button, Alert } from 'antd'
import { browserHistory } from 'dva/router'

import styles from './IndexPage.css'

const FormItem = Form.Item

function hasErrors(fieldsError){
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

class IndexPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {error: false}
    this.handleSubmit  = this.handleSubmit.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(!err){
        if(values.userName === 'show' && values.password === 'onne'){
          browserHistory.push('/main/dashboard')
        }else{
            this.setState({error: true})
        }
      }
    })
  }
  onClose(){
      this.setState({error: false})
  }
  componentDidMount(){
      this.props.form.validateFields()
  }
  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const userNameError = isFieldTouched('userName') && getFieldError('userName')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    let alert = this.state.error ? <Alert message="Invalid username or password !" closable type="error" onClose={this.onClose} /> : ''
    return (
      <div className={styles.h100p}>
        <Row type="flex" align="middle" className={styles.h100p}>
          <Col span={6} offset={9}>
            <h2 style={{textAlign: 'center'}}>Admin System.</h2>
            <h3 style={{textAlign: 'center'}}>userName: show & password: onne</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormItem validateStatus={userNameError ? 'error' : ''}>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem validateStatus={passwordError ? 'error' : ''}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your password!' }]
                })(
                  <Input addonBefore={<Icon type="lock"/>} placeholder="Password" type="password" />
                )}
              </FormItem>
              { alert }
              <Button type="primary" htmlType="submit" style={{width: '100%'}} disabled={hasErrors(getFieldsError())}>Log in</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect()(Form.create()(IndexPage))
