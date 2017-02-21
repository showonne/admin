import { Component } from 'react'
import { connect } from 'dva'

class About extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>About Page.</h1>
      </div>
    )
  }
}

export default connect()(About)
