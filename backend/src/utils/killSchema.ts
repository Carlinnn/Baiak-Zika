import { z } from 'zod';

export const KillSchema = z.object({
  number: z.string(),
  date: z.string(),
  info: z.string(),
  killedBy: z.string(),
  type: z.enum(['player', 'monster'])
});

export const KillsArraySchema = z.array(KillSchema);
