/** @format */
import axios from "axios";
import { getCookies } from "cookies-next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_SERVER;

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  function (config) {
    const token = getCookies("token")?.token;
    const otpToken = getCookies("otpToken")?.otpToken;
    const resetToken = getCookies("resetToken")?.resetToken;

    config.headers.authorization = `${token || otpToken || resetToken}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//user
API.getUser = () => {
  return API.get("users/profile/me");
};

API.updateUser = (data) => {
  return API.patch("users/profile/bio", data);
};
//cdn
API.upload = (data) => {
  return API.post("admin/upload", data);
};
//auth
API.login = (data) => {
  return API.post("users/auth/login", data);
};

API.register = (data) => {
  return API.post("users/auth/signup", data);
};

API.forgetPassword = (data) => {
  return API.post("users/auth/otp/resetPassword", data);
};

API.verifyOtp = (data) => {
  return API.post("users/auth/otp/verify", data);
};

API.resetPassword = (data) => {
  return API.post("/users/auth/reset-password", data);
};

API.changePassword = (data) => {
  return API.patch("users/profile/password", data);
};
//stroies
API.createStory = (data) => {
  return API.post("/stories", data);
};

API.getStories = () => {
  return API.get(`/stories`);
};
API.getStoriespages = (page, limit) => {
  console.log(page, limit)
  return API.get(`/stories?page=${page}&limit=${limit}`);
};
//contact
API.contactUs = (data) => {
  return API.post("/contact-us", data);
};
//team
API.getTeam = () => {
  return API.get("/teams");
};
//blog
API.getBlogs = (page, limit) => {
  if (page && limit) {
    return API.get(`/blogs?page=${page}&limit=${limit}`);
  } else {
    return API.get(`/blogs`);
  }
};

API.getBlogById = (id) => {
  return API.get(`/blogs/${id}`);
};

API.getStats = () => {
  return API.get("/stats");
};

API.getEvents = (page, limit) => {
  if (page && limit) {
    return API.get(`/events?page=${page}&limit=${limit}`);
  } else {
    return API.get(`/events`);
  }
};

API.getEventById = (id) => {
  return API.get(`/events/${id}`);
};
//donation ways

API.getDonation = (param) => {
  return API.get(`/donation/options/${param}`);
};

API.getDonationLink = (id, param, dctf) => {
  if(id && param){
    return API.get(`/donation/link/${id}?giftId=${param}&dctf=${dctf}`);
  }else if(id ){
    return API.get(`/donation/link/${id}?dctf=${dctf}`);
  }
};

API.deleteDonation = () => {
  return API.delete(`/donation`);
};

// gifts
API.getGift = () => {
  return API.get(`/gifts`);
};

// invoices
API.getInvoices = () => {
  return API.get(`/donation/invoices`);
};


//Smtp
API.updateSMTP = (data) => {
  return API.patch(`/smtp`, data);
};

// gallery
API.getGallery = () => {
  return API.get("/gallery?type=images");
};

API.getGalleryByYear = (year, page, limit) => {
  if (page && limit) {
    return API.get(
      `/gallery/year?type=images&year=${year}&page=${page}&limit=${limit}`
    );
  } else {
    return API.get(`/gallery/year?type=images&year=${year}`);
  }
};

export { API };
