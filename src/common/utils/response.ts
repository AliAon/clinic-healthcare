import { messageUtil } from './message';
import { StatusCodes } from 'http-status-codes';
import { Response as expressResponse } from 'express';
type responseType = {
  success: boolean;
  message: string;
  data?: any;
  token?: string;
  error?: string;
};

class Response {
  ExistallReady = async (res: expressResponse, message: string) => {
    res.status(StatusCodes.CONFLICT).send({
      success: false,
      message,
    });
  };

  success = (
    res: expressResponse,
    message: string,
    data: any,
    token?: string | false,
  ) => {
    const response: responseType = {
      success: true,
      message,
    };

    if (data) {
      response.data = data;
      response.token = token ? token : undefined;
    }

    res.status(StatusCodes.OK).send(response);
  };

  authorizationError = (res: expressResponse, message: string) => {
    res.status(StatusCodes.UNAUTHORIZED).send({
      success: false,
      message,
    });
  };

  serverError = (res: expressResponse, error) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      error: error.toString(),
      message: messageUtil.serverError,
    });
  };

  notFound = (res: expressResponse, message: string) => {
    res.status(StatusCodes.NOT_FOUND).send({
      success: false,
      message,
    });
  };

  badRequest = (res: expressResponse, message: string) => {
    res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      message,
    });
  };
}

export default new Response();
