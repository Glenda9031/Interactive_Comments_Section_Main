import './menu_avatar.js';

const allComments = document.querySelector('.all-comments-container');
const deleteCommentContainer = document.querySelector('.delete-comment-container');
const userUnderMenu = document.querySelector('.menu');
let lastId = 4;
let data = getStoredData();
let currentUsername = data.currentUser.username;

// Fetch default data from the local "data JSON" file
const loadComments = async() => {
    allComments.innerHTML = '';
    let response = await fetch('../src/data.json');
    let commentData = await response.json();
    saveDataLocalStorage(commentData);
    renderComments(commentData);
};

// Attach event listener to use current user
userUnderMenu.addEventListener('click', e => {
    if (user) {
        currentUsername = usersUnderMenu.lastElementChild.id;
        location.reload();
        updateCurrentUserToLS(currentUsername);
    }
});

// Update current user to local storage
const updateCurrentUserToLS = (username) => {
    data.currentUser.image.png = '../src/images/avatars/image-${updateCurrentUser}.png';
    data.currentUser.image.webp = '../src/images/avatars/image-${updateCurrentUser}.webp';
    data.currentUser.username = updatedCurrentUser;
    saveDataLocalStorage(data);
};





 