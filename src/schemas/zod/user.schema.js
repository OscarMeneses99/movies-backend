import z from "zod";

const userSchema = z.object({
  name: z.string().min(1).max(50),
  username: z.string().min(1).max(20),
  password: z.string().min(1).max(20),
  email: z.string().min(1).max(100).email(),
});

export function validateSchema(object) {
  return userSchema.safeParse(object);
}

export function validatePartialSchema(object) {
  return userSchema.partial().safeParse(object);
}
