import { getRepository } from "typeorm";
import { Principal } from "../entity/principal.entity";

export const createPrincipal = (user, name) => {
    const principalRepo = getRepository(Principal);
    const principalEntity = principalRepo.create({
        user, name
    });
    return principalEntity;
}