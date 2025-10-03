import mongoose from "mongoose";

import HttpStatus from "http-status";
import {
  TErrorSource,
  TGenericErrorResponse,
} from "../interface/interface.error";

const formateValidatorError = (
  err: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  const errorSource: TErrorSource = Object.values(err.errors).map(
    (val: mongoose.Error.ValidationError | any) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );

  return {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Validation failed",
    errorSource,
  };
};

export default formateValidatorError;
