import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('task')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  task_type: string;
}

export default Task;
