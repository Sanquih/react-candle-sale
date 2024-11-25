import { z } from "zod";

export const amountSchema = z.object({
    amount: z
    .number({ coerce: true, invalid_type_error: "Debe ser un número" })
    .min(1, { message: "Debe ser mayor a 0" })
    .max(100, { message: "Debe ser menor a 100" }),
});

export type schemaType = z.infer<typeof amountSchema>;