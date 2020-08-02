import express from "express";
import bodyParser from "body-parser";
import { getRepository } from "typeorm";

import { Location } from "../entity/location.entity";
import { School } from "../entity/school.entity";

import { createPrincipal } from "../helpers/createPrincipal";
import { createUser } from "../helpers/createUser";

const school = express.Router();
school.use(bodyParser.json());

school.use((req, res, next) => {
  if (req.user.role !== "directorate") {
    res.sendStatus(401);
  } else next();
});

school.get("/", async (req, res) => {
  try {
    // Import neccesary repos
    const schoolRepo = getRepository(School);
    const schools = await schoolRepo.find();
    res.send({ schools });
  } catch (err) {
    console.error("Error getting schools", err);
    res.status(500).send({ message: "Error getting schools" });
  }
});

school.get("/:id", async (req, res) => {
  try {
    // Import neccesary repos
    const schoolRepo = getRepository(School);
    const schoolEntity = await schoolRepo.findOne({
      where: { id: req.params.id },
    });
    res.send({ school: schoolEntity });
  } catch (err) {
    console.error("Error getting school", err);
    res.status(500).send({ message: "Error getting school" });
  }
});

school.post("/", async (req, res) => {
  try {
    // Import neccesary repos
    const schoolRepo = getRepository(School);
    const locationRepo = getRepository(Location);

    const { name, division, principal } = req.body;

    // Get Location
    const locationEntity = await locationRepo.findOne({ where: { division } });

    // Create Principal
    const createdUser = createUser(
      principal.email,
      principal.password,
      "principal"
    );
    const createdPrincipal = createPrincipal(createdUser, principal.name);

    // Create School
    const schoolEntity = schoolRepo.create({
      name,
      location: locationEntity,
      principal: createdPrincipal,
    });
    const createdSchool = await schoolRepo.save(schoolEntity);

    res
      .status(201)
      .send({ message: "Created School and Principal successfully" });
  } catch (err) {
    console.error("Error creating school", err);
    res.status(500).send({ message: "Error creating school" });
  }
});

export default school;
