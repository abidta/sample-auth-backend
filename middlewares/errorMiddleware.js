import createError from "http-errors";
export const notFound = (req, res, next) => {
  //   let err = new Error(`Not found Error ${req.originalUrl}`);
  //   res.status(404);
  //   next(err);
  next(createError(404));
  console.log("kl");
};

export const errorHandler = (err, req, res, next) => {

  res.locals.message = err.message;
  //   err.stack = req.app.get("env") === "development" ? err : {};
  console.error(err.stack);
  console.log(err.status);
  err.status = err.status
    ? err.status
    : (res.statusCode = res.statusCode === 200 ? 500 : res.statusCode);
  res.status(err.status).json(err.message);
};
