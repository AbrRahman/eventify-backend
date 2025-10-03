import { ZodError, ZodIssue } from "zod";

import HttpStatus from "http-status";
import {
  TErrorSource,
  TGenericErrorResponse,
} from "../interface/interface.error";
export const formateZodError = (error: ZodError): TGenericErrorResponse => {
  const errorSource: TErrorSource = error?.issues?.map((issue: ZodIssue) => {
    const lastPath = issue?.path[issue?.path?.length - 1];
    return {
      path:
        typeof lastPath === "string" || typeof lastPath === "number"
          ? lastPath
          : "",
      message: issue?.message,
    };
  });

  return {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Validation failed",
    errorSource,
  };
};
