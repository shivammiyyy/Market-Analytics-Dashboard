import express from 'express';
import { dataControl } from '../controllers/dataControl.js';

const dashBoardRouter = express.Router();

dashBoardRouter.get('/:id', dataControl);

export default dashBoardRouter;