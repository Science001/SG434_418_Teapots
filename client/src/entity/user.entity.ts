
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    AfterLoad,
    BeforeUpdate,
} from "typeorm";
import { randomBytes, createHash } from "crypto";

type Role = 'teacher' | 'principal' | 'directorate';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: Role;

    @BeforeInsert()
    hashPassword() {
        const salt = randomBytes(128).toString("hex");
        this.password = this.getHashedPassword(this.password, salt);
    }

    private tempPassword: string;

    @AfterLoad()
    loadTempPassword(): void {
        this.tempPassword = this.password;
    }

    @BeforeUpdate()
    encryptPassword(): void {
        if (this.tempPassword !== this.password) {
            const salt = randomBytes(128).toString("hex");
            this.password = this.getHashedPassword(this.password, salt);
        }
    }

    getHashedPassword(password: string, salt: string): string {
        const hashedPassword = createHash("sha512")
            .update(password + salt)
            .digest("hex");
        return ["sha512", salt, hashedPassword].join("$");
    }

    comparePassword(attempt: string): boolean {
        const salt = this.password.split("$")[1];
        const hashedAttempt = this.getHashedPassword(attempt, salt);
        return hashedAttempt === this.password;
    }
}