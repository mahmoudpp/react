
import axios from "axios";

const SERVER_URL = "http://192.168.10.1:8080";

let TOKEN = localStorage.getItem("token");
if (TOKEN) {
  axios.defaults.headers.common["Authorization"] = `${TOKEN}`;
}
// @desc Get All Contacts
// @route GET http://localhost:9000/contacts
export const getAllToDoList = () => {
  const url = `${SERVER_URL}/tasks`;
  return axios.get(url);
};

// @desc Get Contact With Contact ID
// @route GET http://localhost:9000/contacts/:contactId
export const getContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`, // Set the Authorization header
    },
  });
};

// @desc  Get All Groups
// @route GET http://localhost:9000/groups
export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`, // Set the Authorization header
    },
  });
};

// @desc  Get Group Name With Group ID
// @route GET http://localhost:9000/groups/:groupId
export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url);
};

// @desc  Create New Contact
// @route POST http://localhost:9000/contacts
export const createToDoList = (todolist) => {
  // console.log("post tion")
  const url = `${SERVER_URL}/tasks`;
  return axios.post(url, todolist);
};

// @desc  Update Contact
// @route PUT http://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/tasks/${contactId}`;
  return axios.post(url, contact);
};

export const updateContact2 = (contact, contactId) => {
  const url = `${SERVER_URL}/tasks/${contactId}`;
  return axios.put(url, contact);
};
// @desc  Delete Contact
// @route DELETE http://localhost:9000/contacts/:contactId
export const deleteContact = (toDoListID) => {
  const url = `${SERVER_URL}/tasks/${toDoListID}`;
  return axios.delete(url);
};


export const singupUser = (user) =>{
  const url = `${SERVER_URL}/user/register`;
  return axios.post(url,user);
}
export const loginUser = async (user) => {
  const url = `${SERVER_URL}/user/login`;
  try {
    const response = await axios.post(url, user);
    const token = response.data.token; // فرض بر این است که توکن در پاسخ موجود است
     TOKEN = token;
     localStorage.setItem("token", TOKEN);
    axios.defaults.headers.common["Authorization"] = `${TOKEN}`; // هدر Authorization به‌روزرسانی شد
    console.log(TOKEN);
    return token; // بازگرداندن توکن برای استفاده در کدهای دیگر
  } catch (error) {
    
    return null;
  }
};

export const logoutUser = () => {
  TOKEN = null;
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  const url = `${SERVER_URL}/user/logout`;
  console.log("logout");

  return axios.post(url);

  

};