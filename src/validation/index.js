/** @format */

import { object, string, ref, number } from "yup";

export const Schema = {
  contactValidation: object({
    name: string().required("Name is required"),
    email: string().required("Email is required").email("Invalid Email"),
    phone: string()
      .required("Number is required")
      .matches(/^\+?[0-9]{9,14}$/, "Invalid Number"),
    message: string().required("Message is required"),
  }),
  loginValidation: object({
    email: string().required("Email is required").email("Invalid Email"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be grater than 8"),
  }),
  forget: object({
    email: string().required("Email is required").email("Invalid Email"),
  }),
  verify: object({
    otp: string("number only")
      .required("OTP is required")
      .matches(/^[0-9]{6}$/, "OTP must be exactly 6 digits"),
  }),
  reset: object({
    password: string()
      .required("Password is required")
      .min(8, "Password must be grater than 8"),
    confirmPassword: string().required("Confirm Password is required"),
  }),
  changePassword: object({
    oldPassword: string()
      .required("Password is required")
      .min(8, "Password must be grater than 8"),
    newPassword: string()
      .required("Password is required")
      .min(8, "Password must be grater than 8")
      .notOneOf(
        [ref("oldPassword")],
        "New password cannot be the same as the old password"
      ),
    confirmPassword: string()
      .required("Confirm Password is required")
      .oneOf([ref("newPassword"), null], "Passwords must match"),
  }),

  update: object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
  }),

  signupValidation: object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    email: string().required("Email is required").email("Invalid Email"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be grater than 8"),
    confirmPassword: string()
      .required("Confirm Password is required")
      .oneOf([ref("password"), null], "Passwords must match"),
  }),
  storyValidation: object({
    name: string().required("Name is required"),
    email: string().required("Email is required").email("Invalid Email"),
    description: string().required("Message is required"),
  }),
};
