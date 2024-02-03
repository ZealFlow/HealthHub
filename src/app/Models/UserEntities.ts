import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { UserProfile } from "./UserProfile";

@Entity()
export class UserEntities extends BaseEntity{
    @PrimaryGeneratedColumn({ type: "int" })
    entity_id!: number;

    @Column("json")
    enity_user!: JSON;

    @Column("timestamp")
    create_at!: Timestamp;

    @Column("timestamp")
    update_at!: Timestamp;

    @Column("int")
    website_id!: number;

    @Column("bit")
    is_active!: boolean;

    @OneToOne(() => UserProfile, (userProfile: UserProfile) => userProfile.user_id)
    @JoinColumn()
    userProfile!: UserProfile;
};