/* eslint-disable */
import request from '@/utils/request'

export function login (username, password) {
  return request({
    url: '/login',
    method: 'post',
    headers:{
      'Content-Type':'application/JSON'},
    data: {
      "username":username,
      "password":password
    }
  })
}

export function getUser (username) {
  console.log("这是login");
  return request({
    url: '/accounts/username/'+username,
    method: 'get',
    headers:{
      'token':localStorage.getItem('token'),
      'Content-Type':'application/x-www-form-urlencoded'},
  })
}

export function updateUser (user) {
  console.log("这是login");
  return request({
    url: '/accounts/',
    method: 'put',
    headers:{
      'token':localStorage.getItem('token'),
      'Content-Type':'application/JSON'},
    data:user
  })
}
