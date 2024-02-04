import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp } from 'typeorm';

@Entity()
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  user_id!: number;

  @Column("nvarchar", { length: 50 })
  firstname!: string;

  @Column("nvarchar", { length: 50 })
  lastname!: string;

  @Column("nvarchar", { length: 100 })
  email!: string;

  @Column("varchar", { length: 50 })
  username!: string;

  @Column({type: "timestamp", default: () => 'NOW()'})
  create_at!: Timestamp;

  @Column({type: "timestamp", default: () => 'NOW()'})
  update_at!: Timestamp;

  @Column({type: "bit", default: true})
  is_active!: boolean;
};
