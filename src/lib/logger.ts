import pino from "pino";

const transportOptions = process.env.NODE_ENV !== "production"
  ? { target: "pipeline", options: { pretty: true } }
  : undefined;

// Using a conditional approach to satisfy "exactOptionalPropertyTypes: true"
export const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  ...(transportOptions ? { transport: transportOptions } : {}),
});
