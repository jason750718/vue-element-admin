import request from '@/utils/request'

export function fetchFuck(query) {
  console.log(query)
  return request({
    url: '/fetch',
    method: 'get',
    params: query
  })
}
