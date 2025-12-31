'use server';

import z from 'zod';
import { createRoomSchema } from '../schemas/rooms';
import { getCurrentUser } from '../lib/getCurrentUser';

export async function createRoom(unsafeData: z.infer<typeof createRoomSchema>) {
  const { success, data } = createRoomSchema.safeParse(unsafeData);

  if (!success) {
    return { error: true, message: 'Invalud room data' };
  }

  const user = await getCurrentUser();
  if (user == null) {
    return { error: true, message: 'User not authenticated' };
  }
}
