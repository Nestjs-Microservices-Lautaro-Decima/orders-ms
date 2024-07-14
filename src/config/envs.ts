import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
}

const envsScheme = joi
  .object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsScheme.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message} `);
}

const envVars: EnvVars = value;

export const envs = {
  PORT: envVars.PORT,
  PRODUCTS_MICROSERVICE_HOST: envVars.PRODUCTS_MICROSERVICE_HOST,
  PRODUCTS_MICROSERVICE_PORT: envVars.PRODUCTS_MICROSERVICE_PORT,
};
