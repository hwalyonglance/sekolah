
import * as functions from 'firebase-functions';
import * as express from 'express';
import { join } from 'path';
import * as socketio from 'socket.io';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const App = express()

App.use('/node_modules', express.static(join(__dirname, 'node_modules')))

App.use((request, response, next) => {
	response.set({
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
		'Access-Control-Allow-Origin': '*'
	})
	next()
})

App.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello from firebase')
})

const io = socketio()

io.use((so, next) => {
	next()
})

export const app = functions.https.onRequest(App);

io.on('connection', (socket) => {
	socket.emit('pong')
})

io.listen(4321)
