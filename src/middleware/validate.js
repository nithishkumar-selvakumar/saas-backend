export const validate = (schema) => async (ctx, next) => {
  try {
    await schema.validateAsync(ctx.request.body, { abortEarly: false });
    await next();
  } catch (error) {
    ctx.status = 400;
    ctx.body = { errors: error.details.map((err) => err.message) };
  }
};
