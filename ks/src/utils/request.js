
import axios from 'axios'
//设置公用地址
const server = axios.create({
  baseURL: 'https://api.7dgame.com/',
  timeout: 20000,
})


//请求拦截器
server.interceptors.request.use(config => {
  //请求拦截：发送请求之前进行拦截
  // if (window.localStorage.getItem('token')) {
  //   config.headers["Authorization"] = window.localStorage.getItem('token')
  // }
  // console.log(config);
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
})


//响应拦截器
server.interceptors.response.use(response => {
  // 响应拦截：服务器响应数据之前进行拦截
  return response;
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 400:
        alert("请求地址不存在或包含不支持的参数")
        break;
      case 401:
        alert("未授权，请登录")
        break;
      case 403:
        alert("拒绝访问")
        break;
      case 404:
        alert("请求地址不存在")
        break;
      case 500:
        alert("服务器内部错误")
        break;
      default:
        alert("连接错误")

    }
  }
  return Promise.reject(error);
})



//自定义get请求
export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    server({
      method: 'get',
      url,
      params: data,
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {

        reject(err)
      })
  })
}


//自定义post请求
export function post(url, params = {}) {
  console.log("kjkjkjkj")
  return new Promise((resolve, reject) => {
    server({
      method: 'post',
      url,
      data: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {

        reject(err.data)
      })
  })
}
// 自定义 delete 请求
export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
    server({
      url,
      method: 'delete',
      params: data,
    }).then(res => {
      resolve(res.data);
    })
      .catch(err => {
        reject(err);
      });
  });
}

// 自定义 put 请求
export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    server({
      method: 'put',
      url,
      data: params,
    })
      .then(res => {

        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
export default server;