import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("USERS", { schema: "BookBase" })
export class User {

    @PrimaryGeneratedColumn({ type: 'bigint', name: "user_id", unsigned: true })
    readonly user_id: number;

    @Column("varchar", { name: "user_email", length: 254 })
    user_email: string;

    @Column("varchar", { name: "user_password", length: 50 })
    user_password: string;

    @Column("varchar", { name: "login_id", nullable: true, length: 50 })
    login_id: string | null;

    @Column("varchar", { name: "user_name", nullable: true, length: 30 })
    user_name: string | null;

    @Column("varchar", { name: "user_name_kana", nullable: true, length: 30 })
    user_name_kana: string | null;

    @Column("int", { name: "sex", nullable: true })
    sex: number | null;

    @Column("int", { name: "age", nullable: true })
    age: number | null;

    @Column("int", { name: "birth", nullable: true })
    birth: number | null;

    @Column("varchar", { name: "phone_number", nullable: true, length: 21 })
    phone_number: string | null;

    @Column("varchar", { name: "post_code", nullable: true, length: 8 })
    post_code: string | null;

    @Column("varchar", { name: "address", nullable: true, length: 160 })
    address: string | null;

    @Column("int", { name: "user_status", nullable: true })
    user_status: number | null;

    @Column("datetime", { name: "created_at" })
    created_at: number | null;

    @Column("datetime", { name: "updated_at" })
    updated_at: number | null;
}