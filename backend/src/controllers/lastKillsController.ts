import { Request, Response } from 'express';
import { fetchLastKills } from '../services/lastKillsService';
import { KillsArraySchema } from '../utils/killSchema';

export async function getLastKills(req: Request, res: Response) {
  try {
    const kills = await fetchLastKills();
    const parsed = KillsArraySchema.safeParse(kills);
    if (!parsed.success) {
  return res.status(500).json({ error: 'Dados inválidos', details: parsed.error.issues });
    }
    res.json({ kills: parsed.data });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
}
