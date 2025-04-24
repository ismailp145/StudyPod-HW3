// schemas/user.ts
import { z } from "zod";

export const UserSchema = z.object({
  id:        z.number(),
  name:      z.string().min(1),
  email:     z.string().email(),
  isActive:  z.boolean().default(true),
});

// Extract a TypeScript type for use elsewhere:
export type User = z.infer<typeof UserSchema>;
