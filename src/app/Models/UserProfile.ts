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

  @Column("timestamp")
  create_at!: Timestamp;

  @Column("timestamp")
  update_at!: Timestamp;

  @Column("bit")
  is_active!: boolean;
};
