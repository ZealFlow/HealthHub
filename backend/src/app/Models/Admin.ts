import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserProfile } from './UserProfile';
import { AdminCredential } from './AdminCredentital';

@Entity()
export class Admin extends BaseEntity {
    @PrimaryGeneratedColumn()
    admin_id!: number;

    @OneToOne(() => UserProfile, userProfile => userProfile.admin, { cascade: true })
    @JoinColumn() 
    userProfile!: UserProfile;

    @OneToOne(() => AdminCredential, adminCredential => adminCredential.admin)
    adminCredential!: AdminCredential;
};
