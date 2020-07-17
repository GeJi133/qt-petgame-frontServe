import request from '@/utils/request'

export function login (loginForm) {
  return request({
    url: '/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON'
    },
    data:loginForm
  })
}
