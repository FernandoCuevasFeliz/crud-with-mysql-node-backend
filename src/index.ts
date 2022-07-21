import app from './app'

function startServer() {
  app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
  })
}

startServer()
