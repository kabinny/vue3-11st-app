import axios from 'axios'

export default {
  install(app) { // vue2와 설정 방식이 바뀌었다
    // app.config.globalProperties.$fetch = (options) => {
    //   // axios({ // 이런 형식의 데이터를 보내야 함
    //   //   method: 'PUT',
    //   //   url: ''
    //   // })
    //   return axios(options)
    // }
    app.config.globalProperties.$fetch = opts => axios(opts)
  }
}