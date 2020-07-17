import { login } from '@/api/user'
import {register} from "../../api/user";

const user = {
  actions: {
    // 登录
    Login({commit},loginForm) {
      return new Promise((resolve, reject) => {
        login(loginForm).then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    Register({commit},loginForm) {
      return new Promise((resolve, reject) => {
        register(loginForm).then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user
