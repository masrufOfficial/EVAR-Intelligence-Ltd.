import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

function resolveDatabaseUrl(): string {
  const envUrl = process.env.DATABASE_URL;
  if (envUrl) {
    if (envUrl.startsWith('file:')) {
      const relativePart = envUrl.replace('file:', '');
      if (path.isAbsolute(relativePart)) {
        return envUrl;
      }
      const fromCwd = path.resolve(process.cwd(), relativePart);
      if (fs.existsSync(fromCwd)) {
        return `file:${fromCwd}`;
      }
      const fromPrisma = path.resolve(process.cwd(), 'prisma', relativePart);
      if (fs.existsSync(fromPrisma)) {
        return `file:${fromPrisma}`;
      }
      return `file:${fromCwd}`;
    }
    return envUrl;
  }

  // Fallbacks if DATABASE_URL is not set in process.env
  const candidatePrismaDb = path.resolve(process.cwd(), 'prisma', 'dev.db');
  const candidateRootDb = path.resolve(process.cwd(), 'dev.db');

  if (fs.existsSync(candidatePrismaDb)) {
    return `file:${candidatePrismaDb}`;
  }
  if (fs.existsSync(candidateRootDb)) {
    return `file:${candidateRootDb}`;
  }

  return `file:${candidatePrismaDb}`;
}

const resolvedDbUrl = resolveDatabaseUrl();
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = resolvedDbUrl;
}

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: resolvedDbUrl,
      },
    },
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
