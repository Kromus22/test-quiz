import { createThankYouScreen } from "../components/thankYouScreen.js";

const API = 'https://dummyjson.com/posts/add';

export const postData = (data) => {
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(createThankYouScreen(data));
}