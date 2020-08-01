import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const createUser = (email, password, role) => {
    const userRepo = getRepository(User);
    const userEntity = userRepo.create({
        email, password, role,
    });
    return userEntity;
}