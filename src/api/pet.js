import request from '@/utils/request'

export function getPetsByUsername (username) {
  return request({
    url: '/pets/user/'+username,
    method: 'get',
  })
}
export function getPets () {
  return request({
    url: '/pets',
    method: 'get',
  })
}
export function getPetsById (id) {
  return request({
    url: '/pets/'+id,
    method: 'get',
  })
}
export function addPet (petForm) {
  return request({
    url: '/pets',
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON'
    },
    data:petForm
  })
}
export function updatePet (petForm) {
  console.log("去请求了");
  return request({
    url: '/pets',
    method: 'patch',
    headers: {
      'Content-Type': 'application/JSON'
    },
    data:petForm
  })
}
