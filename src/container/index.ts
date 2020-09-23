import { container } from 'tsyringe';
import ITaskRepository from '../repositories/ITaskRepository';
import TaskRepository from '../repositories/implementations/TaskRepository';

container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);
