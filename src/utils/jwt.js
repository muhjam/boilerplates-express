const JWT = require('jsonwebtoken');
const constant = require('./constant');
const BaseError = require('../schemas/responses/BaseError');

const getToken = (data) => {
  try {
    const Key = process.env.JWT_KEY || 'YOUR_SECRET_KEY';
    const token = JWT.sign(data, Key, { expiresIn: constant.JWT_TOKEN_EXPIRED });
    return token;
  } catch (error) {
    throw new BaseError({
      status: 500,
      message: 'Failed to create token',
    });
  }
};

const verifyToken = (token) => {
  try {
    const Key = process.env.JWT_KEY || 'YOUR_SECRET_KEY';
    const decoded = JWT.verify(token, Key);
    return decoded;
  } catch (error) {
    throw new BaseError({
      status: 401,
      message: 'Invalid or expired token',
    });
  }
};

const decodeToken = (token) => {
  try {
    const decoded = JWT.decode(token);
    return decoded;
  } catch (error) {
    throw new BaseError({
      status: 500,
      message: 'Failed to decode token',
    });
  }
};

module.exports = {
  getToken,
  verifyToken,
  decodeToken,
};
