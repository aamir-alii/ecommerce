const { apiResponse, AppError } = require("../libs/");

const createOne = (Model, modelType) => {
  return async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = req.file.filename;
      }
      const record = await Model.create(req.body);
      apiResponse(res, 201, true, `${modelType} created`, record);
    } catch (error) {
      return next(new AppError(error.message, 500));
    }
  };
};

const getOne = (Model, modelType) => {
  return async (req, res, next) => {
    try {
      let records;
      if (req.popOtions) {
        console.log("done");
        records = await Model.find().populate(req.popOtions);
      } else records = await Model.find();
      const record = await Model.findById(req.params.id);
      if (!record) return next(new AppError(`${modelType} not found`, 404));
      return apiResponse(res, 200, true, `${modelType} Detail`, record);
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  };
};

const getAll = (Model, modelType) => {
  return async (req, res, next) => {
    try {
      let records;
      if (req.popOtions) records = await Model.find().populate(req.popOtions);
      else records = await Model.find();
      return apiResponse(
        res,
        200,
        true,
        `${records.length} record found`,
        records
      );
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  };
};

const updateOne = (Model, modelType) => {
  return async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = req.file.filename;
      }
      const updatedUser = await Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      apiResponse(res, 200, true, `${modelType} updated`, updatedUser);
    } catch (error) {
      return next(new AppError(error.message, 500));
    }
  };
};
const deleteOne = (Model, modelType) => {
  return async (req, res, next) => {
    const record = await Model.findById(req.params.id);
    if (!record) return next(new AppError(`${modelType} not found`, 404));
    await Model.findByIdAndDelete(req.params.id);
    apiResponse(res, 204, true, `${modelType} deleted`);
  };
};

module.exports = {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getAll,
};
