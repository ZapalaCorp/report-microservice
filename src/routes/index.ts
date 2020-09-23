import { Router } from 'express';
import taskRouter from './task.routes';
const routes = Router();

routes.use('/tasks', taskRouter);

export default routes;
