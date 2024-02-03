import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserProfile } from './UserProfile';

@Entity()
export class Credential extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    password_id!: number;

    @PrimaryColumn({ type: "int" })
    entity_user_id!: number;

    @Column("varchar", { length: 100 })
    password_hash!: string;

    @Column("varchar", { length: 100 })
    password_salt!: string;

    @Column("varchar", { length: 150 })
    confirmation_token!: string;

    @Column("timestamp")
    token_generation_time!: Timestamp;

    @Column("varchar", { length: 150 })
    password_recovery_token!: string;

    @Column("timestamp")
    recovery_token_time!: Timestamp;

    @Column("timestamp")
    last_updated!: Timestamp;

    @OneToOne(() => UserProfile, (userProfile: UserProfile) => userProfile.user_id)
    @JoinColumn()
    userProfile!: UserProfile;
};
