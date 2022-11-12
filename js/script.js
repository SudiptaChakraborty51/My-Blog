let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () => {
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

const postDiv = document.querySelector(".post");
const title = document.querySelector(".title");
const like = document.querySelector(".fa-thumbs-up");
const user = document.querySelector(".user");
const userImage = document.querySelector(".user-image");
const image = document.querySelector(".image");
const tag = document.querySelector(".tag");
const postContainer = document.querySelector(".posts-container");
const popularPostTitle = document.querySelector(".popularPost-title");
const pPost = document.querySelector(".p-post");
const postTitle = document.querySelector(".post-title");
let headingText = "";
let popularPost = "";
const options = {
  dateStyle: 'long',
  timeStyle: 'medium',
  hour12: false
};

fetch("https://dummyapi.io/data/v1/tag/water/post?limit=10", {
    method: 'GET',
    headers: {
      'app-id': '636e37d60e8277a6b9f87099'
    },
  })
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    data.data.map((item) => {
      console.log(item);
      const dt = new Date(item.publishDate).toLocaleString('en-US', options);
      headingText = headingText +
        `<div class="post">
        <img src=${item.image} alt="image not found" class="image">
        <div class="date">
          <i class="far fa-clock"><span> ${dt}</span></i>
        </div>
        <a href="/postDetails.html" class="title">${item.text}</a>
        <div class="post-tag">
          <a href="#" class="tag">${item.tags[0]}</a>
          <a href="#" class="tag">${item.tags[1]}</a>
          <a href="#" class="tag">${item.tags[2]}</a>
        </div>
        <div class="links">
          <img src=${item.owner.picture} alt="" class="user-image"/>
          <a href="#" class="user">&nbsp;&nbsp;${item.owner.title} ${item.owner.firstName} ${item.owner.lastName}</a>
          <a href="#" class="icon">
              <i class="fas fa-thumbs-up"></i>
              <span>${item.likes}</span>
          </a>
        </div>
       </div>`;
      return (
        postContainer.innerHTML = headingText
      )
    })
    data.data.map((post) => {
      const dt = new Date(post.publishDate).toLocaleString('en-US', options);
      popularPost = popularPost + `
            <a href="#">
                <h3 class="popularPost-title">${post.text}</h3>
                <span class="popularPost-date"><i class="far fa-clock"></i>${dt}</span>
            </a>`
      return (
        pPost.innerHTML = popularPost
      )
    })
  })
  .catch(error => console.log(error));

  title.addEventListener("click", clickHandler());

  function clickHandler(event){
    var titlePost = event.target.innerText;
    console.log(titlePost);
  }