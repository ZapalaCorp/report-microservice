import Task from '../entities/Task';

export default interface ITaskRepository {
  findById(id: Number): Promise<Task | undefined>;
  save(task: Task): Promise<Task>;
}
