import request from '@/utils/request'

export function homeswiperdata(){
  return request({
    url:'/home/swiperdata',
    method: 'get'
  })
}

export function homecatitems(){
  return request({
    url:'/home/catitems',
    method: 'get'
  })
}