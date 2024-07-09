export const daysLeft = (deadline: number) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return Number(remainingDays.toFixed(0)) > 0 ? remainingDays.toFixed(0) : "0";
};

export const calculatePercentage = (amount: number, goal: number) => {};

export { encryptObject } from "./crypto";
export { decryptObject } from "./crypto";
