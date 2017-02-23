
import { login } from '../services/index'
import { browserHistory } from 'dva/router'

export default {

  namespace: 'index',

  state: {
    loading: false,
    userName: '',
    nickName: '',
    errorInfo: null
  },
  subscriptions: {

  },
  effects: {
    *login({payload}, {call, put}){
      yield put({type: 'loadingStart'})
      const { data } = yield call(login, payload)
      if(data.success){
        yield put({type: 'loginSuccess', payload: data})
        sessionStorage.userName = data.info.userName
        sessionStorage.nickName = data.info.nickName
        browserHistory.push('/main/dashboard')
      }else{
        yield put({type: 'loginFaild', payload: data})
      }
      yield put({type: 'loadingEnd'})
    },
    *logout(){
      delete sessionStorage.userName
      delete sessionStorage.nickName
      browserHistory.push('/')
    }
  },

  reducers: {
    loadingStart(state){
      return {...state, loading: true}
    },
    loadingEnd(state){
      return {...state, loading: false}
    },
    loginSuccess(state, { payload }){
      return {...state, ...payload.info}
    },
    loginFaild(state, { payload }){
      return {...state, errorInfo: payload.info }
    },
    dismissError(state){
      return {...state, errorInfo: null}
    }
  },

};
