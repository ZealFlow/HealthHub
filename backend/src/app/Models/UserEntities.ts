import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { UserProfile } from "./UserProfile";

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

    @OneToOne(() => UserProfile, userProfile => userProfile.userEntities, { cascade: true })
    @JoinColumn() 
    userProfile!: UserProfile;
};
