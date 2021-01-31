import { BaseEntity, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    id: string;

    username: string;

    password: string;
}