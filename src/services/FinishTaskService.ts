import { injectable, inject } from 'tsyringe';
import ITaskRepository from '../repositories/ITaskRepository';
import IFinishTaskDTO from './DTOS/FinishTaskService.DTO';

@injectable()
export class FinishTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  public async execute({ taskId, newSubJobId, onlySendJob }: IFinishTaskDTO) {
    const task = await this.taskRepository.findById(taskId);

    // if (task.receiver.getSelectedCompanyOrDefault().name.startsWith("Allied")) {
    //   if (!onlySendJob) TaskController.finishTaskAllied(task);

    //   if (!newSubJobId.equals(Integer.valueOf(-1))) {
    //       Job subJob = Job.get(newSubJobId);
    //       ApiZIntegrationController.sendJobToAmos(subJob);
    //   }

    // } else if (task.receiver.getSelectedCompanyOrDefault().approveTaskAutomatically) {
    //     if (!onlySendJob) Task.approveTask(task.receiver, task.jsonNode(), ActorRef.noSender());
    // }

    return task;
  }
}
