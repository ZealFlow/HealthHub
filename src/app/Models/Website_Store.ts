import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp } from 'typeorm';

@Entity()
export class Website_Strore extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  website_id!: number;

  @Column("varchar", { length: 250 })
  domain!: string;

  @Column("bit")
  is_active!: boolean;
};
