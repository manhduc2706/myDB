import { Seeder } from "./initAdmin";

export const seedAll = async () => {
  await Seeder.seedCompany();
  await Seeder.seedDepartment();
  await Seeder.seedAdmin();
};
