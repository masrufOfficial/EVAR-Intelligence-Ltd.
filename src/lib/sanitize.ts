/**
 * Input sanitization & security helpers to prevent XSS, Path Traversal, and Bot abuse.
 */

export function sanitizeText(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/javascript:/gi, 'blocked:')
    .trim();
}

export function validateSafeFilename(filename: string): boolean {
  if (!filename || typeof filename !== 'string') return false;
  // Reject directory traversal patterns
  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    return false;
  }
  // Allow only alphanumeric characters, hyphens, underscores, dots
  const safeRegex = /^[a-zA-Z0-9_\-\.]+$/;
  return safeRegex.test(filename) && filename.length <= 100;
}

export function isHoneypotTriggered(botTrapValue: unknown): boolean {
  if (typeof botTrapValue === 'string' && botTrapValue.trim().length > 0) {
    return true;
  }
  return false;
}
