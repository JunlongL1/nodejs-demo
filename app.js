const http = require('http')
const fs = require('fs')

const sever = http.createServer((req ,res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunck) => {
      body.push(chunck)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
    })
    res.statusCode = 302
    res.setHeader('Loaction', '/')
    return res.end()
  }
  // process.exit()
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
})

sever.listen(3000)