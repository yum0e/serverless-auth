import { HttpAPIServer } from ".";
import serverless from "serverless-http";

export const handler = async (event: string, context: any) => {
  console.log("event");
  const httpServer = new HttpAPIServer();
  const app = httpServer.getApi();
  return serverless(app, { provider: "aws" })(event, context);
};