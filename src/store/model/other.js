import { login } from '@/api/user'

const user = {
  actions: {
    // 登录
    Login({commit}, userForm) {
      return new Promise((resolve, reject) => {
        login(userForm).then(response => {
          commit('INCREMENT')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
