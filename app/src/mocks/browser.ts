import { setupWorker } from 'msw';
import { handler } from './handler';

export const server = setupWorker(handler);