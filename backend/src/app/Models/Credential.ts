import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { UserProfile } from './UserProfile';

@Entity()
export class Credential extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    password_id!: number;

    @Column("varchar", { length: 250 })
    password_hash!: string; 

    @Column("varchar", { length: 250 })
    password_salt!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    last_updated!: Timestamp;

    @OneToOne(() => UserProfile, userProfile => userProfile.credential)
    userProfile!: UserProfile;
};
