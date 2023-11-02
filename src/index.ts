import express from 'express';
import 'dotenv/config';
import './db';

import noteRouter from '@/routers/note';
import { PORT } from '@/utils/variables';

// create a server
const app = express();

// this will parse post request coming from fetch.post() method
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

/**
 * 
 * "localhost:8000/note/create"
"localhost:8000/note"
"localhost:8000/note/noteId"
"localhost:8000/note/noteId"
*/
app.use('/note', noteRouter);

// listen to some port
app.listen(PORT, () => {
	console.log('listening');
});
