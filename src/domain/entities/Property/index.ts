import { Input, date, number, object, safeParse, string, uuid } from "valibot";

export const propertySchema = object({
  id: string([uuid()]),
  name: string(),
  location: string(),
  price: number(),
  ownerId: string(),
  createdAt: date(),
  updatedAt: date(),
});

export type Property = Input<typeof propertySchema>;

export const parseProperty = (property: unknown) =>
  safeParse(propertySchema, property);

const _p = parseProperty({
  id: "5ae864f6-4fad-4f64-98b6-54048c3b9c83",
  name: "",
  location: "",
  price: 0,
  ownerId: "",
  createdAt: new Date(),
  updatedAt: new Date(),
});
