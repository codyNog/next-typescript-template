import { User } from "~/domain/entities/User";

const user: User = {
  id: "5ae864f6-4fad-4f64-98b6-54048c3b9c83",
  email: "example@example.com",
  name: "foo",
  age: 1,
  properties: [],
};

const users: User[] = [user];

export const mockUser = { user, users };
