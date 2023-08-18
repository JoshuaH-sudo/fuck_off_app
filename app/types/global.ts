/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    SESSION_SECRET: string;
    NODE_ENV: string;
  }
}
