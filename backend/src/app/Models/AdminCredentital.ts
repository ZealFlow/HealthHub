import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, Index } from 'typeorm';
import { Admin } from './Admin';

@Entity()
export class AdminCredential extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    password_id!: number;

    @Column("varchar", { length: 250 })
    password_hash!: string; 

    @Column("varchar", { length: 250 })
    password_salt!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    last_updated!: Timestamp;

    @OneToOne(() => Admin, admin => admin.adminCredential, { cascade: true })
    @JoinColumn()
    @Index({ unique: true })
    admin!: Admin;
};
