import { Request, Response } from 'express';
import { FinishTaskService } from './FinishTaskService';
import { container } from 'tsyringe';

export default class FinishTaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { taskId, newSubJobId, onlySendJob } = request.body;

    try {
      const finishTaskService = container.resolve(FinishTaskService);

      const taskCreated = await finishTaskService.execute({
        taskId,
        newSubJobId,
        onlySendJob,
      });

      return response.json(taskCreated);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
