import { compose, prop } from "ramda";

export const days = timestamp => Math.floor(timestamp / (24 * 60 * 60));

export const getTimestamp = compose(prop("unix-timestamp"), prop("transaction"));

export const getDays = compose(days, getTimestamp);

export const sameDay = (receiptA, receiptB) => getDays(receiptA) === getDays(receiptB);
