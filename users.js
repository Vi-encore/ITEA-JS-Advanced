let page = localStorage.getItem("page");
let pagination = document.querySelectorAll(".pagination__item");
const firstPaginationButton = document.querySelectorAll(".pagination__item")[0];

const currentUrl = window.location;
let url = new URL(currentUrl);
let searchParams = new URLSearchParams(url.search);

async function getUsers(page) {
  let result = await fetch(
    `https://gorest.co.in/public/v2/users?page=${page}&per_page=5`
  );
  return result.json();
}

window.addEventListener("load", () => {
  localStorage.setItem("page", `${firstPaginationButton.nodeType}`);
  console.log(localStorage.getItem("page"));

  searchParams.set(`page`, `${page}`);
  url.search = searchParams.toString();
  // console.log(url.search);
  // console.log(location);
  window.history.pushState(null, "", url.toString());

  logUsers();
});

function logUsers() {
  getUsers(page).then((res) => {
    let usersWrap = document.querySelector(".js-users-list");
    let allUsers = "";

    res.forEach((user) => {
      allUsers += `<li class="users__item user user--${user.status}" data-id="${user.id}">
                <div class="user__wrapper">
                <div class="user__img">
                <img src="img/${user.gender}.png" alt="${user.gender}">
                </div>
                <div class="user__info">
                <p class="user__name">${user.name}</p>
                <p class="user__email">${user.email}</p>
                </div>
                </div>
                </li>`;
    });

    usersWrap.innerHTML = allUsers;
  });
}

function changeClass() {
  let btns = document.querySelectorAll(".pagination__item");

  for (let i = 0; i < btns.length; i++) {
    let value = btns[i].attributes[1].value;

    value === page
      ? btns[i].classList.add("pagination__item--active")
      : btns[i].classList.remove("pagination__item--active");
  }
}


pagination.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const itemIndex = e.target.attributes[1].nodeValue;
    
    page = itemIndex;
    // changeClass()
    
    localStorage.setItem("page", `${itemIndex}`);
    searchParams.set(`page`, `${page}`);
    url.search = searchParams.toString();
    
    location = url.toString();
  });
});

changeClass();
logUsers();
