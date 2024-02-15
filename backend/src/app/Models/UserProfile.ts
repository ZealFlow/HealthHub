import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { UserEntities } from './UserEntities';
import { Admin } from './Admin';
import { EntitiesRole } from './EntitiesRole';

@Entity()
export class UserProfile extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    user_id!: number; 

    @Column("nvarchar", { length: 50, nullable: true })
    firstname!: string;

    @Column("nvarchar", { length: 50, nullable: true })
    lastname!: string;

    @Column("nvarchar", { length: 100, nullable: true })
    email!: string;

    @Column("varchar", { length: 50, nullable: true })
    username!: string;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    create_at!: Timestamp;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    update_at!: Timestamp;

    @Column({ type: "bit", default: true })
    is_active!: boolean;

    @OneToOne(() => Admin, admin => admin.userProfile)
    admin!: Admin;

    @OneToOne(() => UserEntities, userEntities => userEntities.userProfile, { cascade: true })
    userEntities!: UserEntities;

    @OneToMany(() => EntitiesRole, entitiesRole => entitiesRole.userProfile)
    entitiesRole!: EntitiesRole[];
};
