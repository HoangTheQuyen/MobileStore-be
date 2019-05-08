const _ResponseBuilder = require("../config/enum");
const _User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require('../config/JWTConfig')

module.exports = {
  login: (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.status(200).json({
        STATUS: {
          returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
          message: "email or password or is required."
        }
      });
    }

    if (
      (email && typeof email !== "string") ||
      (password && typeof password !== "string")
    ) {
      res.status(200).json({
        STATUS: {
          returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
          message: "email or password are a string."
        }
      });
    }

    _User
      .findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.status("401").json({
            STATUS: {
              returnCode: _ResponseBuilder.RETURN_CODE.SUCCESS,
              message: "User not Found"
            }
          });
        }
        if (!user.authenticate(password)) {
          res.status(401).json({
            STATUS: {
              returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
              message: "Email and password don't match."
            }
          });
        }

        const token = jwt.sign(
          {
            _id: user._id,
            accountType: user.accountType
          },
          config.jwtSecret
        );

        res.cookie("t", token, {
          expire: new Date() + 9999
        });

        return res.status(200).json({
          STATUS: {
            returnCode: _ResponseBuilder.RETURN_CODE.SUCCESS,
            message: "login successfully"
          },
          token: token
        });
      })
      .catch(err => {
        res.status(200).json({
          STATUS: {
            returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
            message: err + ""
          }
        });
      });
  },
  logout: (req, res, next) => {},
  register: (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const AccountType = req.body.AccountType;
    const image = req.body.image;
    const phone = req.body.phone;
    const point = req.body.point;

    if (!name || !email || !password) {
      res.status(200).json({
        STATUS: {
          returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
          message: "name or email or password or is required."
        }
      });
    }

    if (password && password.length < 6) {
      res.status(200).json({
        STATUS: {
          returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
          message: "Password must be at least 6 characters."
        }
      });
    }

    if (
      accountType.length > 0 &&
      accountType != "TYPEUSER1" &&
      accountType != "TYPEUSER2" &&
      accountType != "ADMIN"
    ) {
      res.status(200).json({
        STATUS: {
          returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
          message: "accountType is USER or ADMIN."
        }
      });
    }

    if (
      (name && typeof name !== "string") ||
      (email && typeof email !== "string") ||
      (password && typeof password !== "string") ||
      (AccountType && typeof AccountType !== "string") ||
      (image && typeof image !== "stirng") ||
      ((phone && typeof phone !== "string") ||
        (point && typeof point !== "number"))
    ) {
      res.status(200).json({
        STATUS: {
          returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
          message: "name or email or password or image are a string."
        }
      });
    }

    _User
      .findOne({ email: email })
      .then(user => {
        if (user) {
          return res.status(200).json({
            STATUS: {
              returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
              message: "User already exitsts"
            }
          });
        } else {
          const ur = new _User({
            name: name,
            email: email,
            phone: phone,
            image: image,
            password: password,
            AccountType: AccountType,
            point: point
          });

          ur.save()
            .then(u => {
              if (!u) {
                return res.status(200).json({
                  STATUS: {
                    returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
                    message: "Create user fail"
                  }
                });
              } else {
                res.status(200).json({
                  STATUS: {
                    returnCode: _ResponseBuilder.RETURN_CODE.SUCCESS,
                    message: "Registered user successfully"
                  },
                  username: u.name
                });
              }
            })
            .catch(err => {
              res.status(200).json({
                STATUS: {
                  returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
                  message: err + "jkhad"
                }
              });
            });
        }
      })
      .catch(err => {
        res.status(200).json({
          STATUS: {
            returnCode: _ResponseBuilder.RETURN_CODE.FAILURE,
            message: err + ""
          }
        });
      });
  },
  resetpassword: (req, res, next) => {}
};
