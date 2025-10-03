import mongoose from "mongoose";

import HttpStatus from "http-status";
import {
  TErrorSource,
  TGenericErrorResponse,
} from "../interface/interface.error";

const formateDuplicateError = (error: any): TGenericErrorResponse => {
  const match = error?.errorResponse?.errmsg?.match(/"(.*?)"/);
  const exactMatch = match && match[1];

  let errorSource: TErrorSource = [
    {
      path: "",
      message: `${exactMatch} are already exist`,
    },
  ];
  return {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Duplicate key error",
    errorSource,
  };
};

export default formateDuplicateError;
