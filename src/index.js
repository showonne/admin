import dva from 'dva'
import { browserHistory } from 'dva/router'
import './assets/css/index.css'

browserHistory.customerProp = 'showonne'
// 1. Initialize
const app = dva({
  history: browserHistory
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index'))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
