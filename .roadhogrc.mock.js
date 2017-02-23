
export default {
  'POST /login' (req, res) {
    let random = Math.random()
    setTimeout(() => {
      if(random < 0.4){
        res.json({
          success: false,
          info: '账户不存在'
        })
      }else if(random < 0.6){
        res.json({
          success: false,
          info: '账户名或密码错误'
        })
      }else{
        res.json({
          success: true,
          info: {
            userName: 'showonne',
            nickName: 'Heng温'
          }
        })
      }
    }, 500)
  }
}
