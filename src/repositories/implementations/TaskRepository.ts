import Task from '../../entities/Task';
import ITaskRepository from '../ITaskRepository';
import { getRepository, Repository } from 'typeorm';

export default class TaskRepository implements ITaskRepository {
  private ormRepository: Repository<Task>;

  constructor() {
    this.ormRepository = getRepository(Task);
  }

  public async findById(id: number): Promise<Task | undefined> {
    console.log('hi');
    console.log(id);
    const user = await this.ormRepository.findOne(id);
    console.log(user);
    return user;
  }

  public async save(task: Task): Promise<Task> {
    return this.ormRepository.save(task);
  }
}
