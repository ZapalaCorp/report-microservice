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

  @Column()
  status: string;

  @Column()
  requester_login_id: number;

  @Column()
  receiver_login_id: number;

  @Column()
  owner_selector: number;

  @Column()
  cancel_acknowledge: number;

  @Column()
  ask_permission: number;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  date_create: Date;

  @Column()
  date_update: Date;

  @Column()
  date_deadline: Date;

  @Column()
  date_start: Date;

  @Column()
  date_finish: Date;

  @Column()
  version: number;

  @Column()
  branch_from: number;

  @Column()
  branch_to: number;

  @Column()
  certify1: number;

  @Column()
  certify2: number;

  @Column()
  certify3: number;

  @Column()
  certify4: number;

  @Column()
  certify5: number;

  @Column()
  signature1: string;

  @Column()
  signature2: string;

  @Column()
  str_sign1: string;

  @Column()
  str_sign2: string;

  @Column()
  is_support: number;

  @Column()
  grouping: number;

  @Column()
  customer_id: number;

  @Column()
  multiple_task: number;

  @Column()
  finish_comment: string;

  @Column()
  trip_manager_id: number;

  @Column()
  pre_auth_inventory: string;

  @Column()
  pre_auth_name: string;

  @Column()
  transhipment_id: number;

  @Column()
  uplift_signature1: string;

  @Column()
  uplift_signature2: string;

  @Column()
  uplift_name1: string;

  @Column()
  uplift_name2: string;

  @Column()
  uplift_comment: string;

  @Column()
  matt_order_id: number;

  @Column()
  certify6: number;

  @Column()
  uplift_certify6: number;

  @Column()
  certify7: number;

  @Column()
  uplift_certify7: number;

  @Column()
  storage_comment: string;

  @Column()
  container_comment: string;

  @Column()
  home_pack_comment: string;

  @Column()
  email_sent: number;
}

export default Task;
