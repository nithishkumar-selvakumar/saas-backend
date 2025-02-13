const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      success: false,
      message: err.message || "Something went wrong!",
    };
    console.error("🔥 Error:", err.message);
  }
};

export default errorHandler;
