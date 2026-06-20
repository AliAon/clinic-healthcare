import { Request } from 'express';

export function getNextMonthDate(startDate, monthIndex) {
  const date = new Date(startDate);

  date.setMonth(date.getMonth() + monthIndex);

  return date;
}

export const generateSR = () => {
  return `SR-${Date.now()}`;
};

export const getAuthBearerToken = (req: Request): string | undefined => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.split(' ')[1];
  }
};
