let express = require('express')
let http = require('http')
let path = require('path')

const App = express()

App.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
// App.use('/', express.static(path.join(__dirname, 'sio.html')))

App.use((request, response, next) => {
	response.set({
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
		'Access-Control-Allow-Origin': '*'
	})
	next()
})

App.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'sio.html'))
})

const server = http.Server(App)
App.listen(3000, () => {
	console.log('3000')
})
