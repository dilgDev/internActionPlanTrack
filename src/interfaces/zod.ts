import { z } from "zod";
export const LoginFormSchema = z.object({
  username: z.string().min(1, "Username is required."),
  password: z.string().min(1, "Pasword is required."),
});
