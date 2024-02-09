import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class UserEntities extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    entity_id!: number;

    @Column("json")
    enity_user!: JSON;

    @Column({ type: "timestamp", default: () => 'NOW()' })
    create_at!: Timestamp;

    @Column({ type: "timestamp", default: () => 'NOW()' })
    update_at!: Timestamp;

    @Column("bit") 
    is_active!: boolean;

    // @OneToOne(() => UserProfile, (userProfile: UserProfile) => userProfile.user_id, { onDelete: "CASCADE", cascade: ['insert', 'update'] })
    // @JoinColumn()
    // userProfile!: UserProfile;
};
