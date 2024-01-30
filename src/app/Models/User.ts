import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: "varchar", length: 200 })
    username: string | undefined;

    @Column({ type: "varchar", length: 200 })
    email: string | undefined;
}

export { User };