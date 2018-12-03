const getBody = require('raw-body')

const send = (rep, data, hander=null, code=200) => {
  rep.setHeader('content-type', 'application/json')
  rep.setStatusCode(code)
  rep.send(JSON.stringify(data))
}

/**
 * 通过用户名密码校验用户是否存在，密码是否正确，返回数据
 *
 * */
module.exports.handler = async (req, rep, ctx) => {
  const body = await getBody(req)
  const d = JSON.parse(body)
  // 在数据库查找对应的数据
  send(rep, d)
}
