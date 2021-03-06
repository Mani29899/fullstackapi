import express, { application } from 'express';
import bodyParser from 'body-parser';
import { productCategoryRouter } from './app/index.js';
import path from 'path';
import cors from 'cors';




const App = express();


App.use(bodyParser.json({
    limit: '50mb',
    extended: true
}));
App.use(bodyParser.urlencoded({
    limit: '2mb',
    extended: true
}))

App.use(cors());

App.use('/productCategory', productCategoryRouter);








export default App;