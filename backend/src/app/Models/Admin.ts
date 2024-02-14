import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserProfile } from './UserProfile';

@Entity()
export class Admin extends BaseEntity {
    @PrimaryGeneratedColumn()
    admin_id!: number;

    @OneToOne(() => UserProfile, userProfile => userProfile.admin, { cascade: true })
    @JoinColumn() 
    userProfile!: UserProfile;
};
