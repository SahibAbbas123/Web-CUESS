import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().url(),
  CLIENT_ORIGIN: z.string().default("http://localhost:3000"),
  GMAIL_USER: z.string().email(),
  GMAIL_APP_PASSWORD: z.string().min(16)
});

export const ENV = schema.parse(process.env);