export const IS_STORYBOOK = !!process.env.STORYBOOK;

export const DATABASE_NAME = process.env.DATABASE_NAME || "mydatabase";
export const DATABASE_USER = process.env.DATABASE_USER || "myuser";
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "mypassword";
export const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
export const DATABASE_PORT = Number(process.env.DATABASE_PORT) || 5432;
export const DATABASE_URL = `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
