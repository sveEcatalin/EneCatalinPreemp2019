const Joi = require("joi");

const validatePathParams = schema => (req, res, next) => {
  const result = schema.validate(req.params);
  if (result.error === null) next();
  else {
    console.log("calling from joi");
    res.status(400).json({ error: "invalid id" });
  }
};

const getProductsByIdSchema = Joi.object().keys({
  id: Joi.number().integer()
});

module.exports = { getProductsByIdSchema, validatePathParams };
