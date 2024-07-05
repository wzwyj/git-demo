import server from '../../src/utils/request.js'

export function login(data) {
  console.log(data);
  return server({
    url: '/sites/login',
    method: 'post',
    data
  })
}