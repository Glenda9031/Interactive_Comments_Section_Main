import './menu_avatar.js';

const allComments = document.querySelector('.all-comments-container');
const deleteCommentContainer = document.querySelector('.delete-comment-container');
const userUnderMenu = document.querySelector('.menu');
let lastId = 4;
let data = getStoredData();
let currentUsername = data.currentUser.username;

