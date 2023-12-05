import { Input, date, number, object, parse, string, uuid } from "valibot";

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

export const parseProperty = (property: unknown): Property =>
  parse(propertySchema, property);

const _p = parseProperty({});
