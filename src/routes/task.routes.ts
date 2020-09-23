import { Router } from 'express';
import FinishTaskController from '../services/FinishTask/FinishTaskController';

const taskRouter = Router();

const finishTaskController = new FinishTaskController();

taskRouter.get(
  '/:taskId/endTask/:newSubJobId/:onlySendJob',
  (request, response) => {
    return finishTaskController.create(request, response);
  },
);

export default taskRouter;
