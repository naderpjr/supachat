'use server';

import z from 'zod';
import { createRoomSchema } from '../schemas/rooms';

export async function createRoom(
  unsafeData: z.infer<typeof createRoomSchema>
) {}
