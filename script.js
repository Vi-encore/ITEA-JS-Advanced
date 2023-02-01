let goods = [
  {
    id: 14606570,
    href: "https://hard.rozetka.com.ua/ua/kingston_sa400s37_240g/p14606570/",
    title: 'Kingston SSDNow A400 240GB 2.5" SATAIII 3D TLC (SA400S37/240G)',
    images: [
      {
        preview:
          "https://content.rozetka.com.ua/goods/images/preview/10957834.jpg",
      },
    ],
    price: {
      old: 806,
      current: 549,
    },
    badge: "new",
  },
  {
    id: 280807508,
    href: "https://rozetka.com.ua/ua/persil_9000101428230/p280807508/",
    title: "Пральний порошок Persil автомат Колор 8.1 кг (9000101428230)",
    images: [
      {
        preview:
          "https://content1.rozetka.com.ua/goods/images/preview/242978958.jpg",
      },
    ],
    price: {
      old: 896,
      current: 509,
    },
    badge: "sale",
  },
  {
    id: 258053376,
    href: "https://rozetka.com.ua/ua/jacobs_8714599108932/p258053376/",
    title: "Кава розчинна Jacobs Monarch 500 г (8714599108932)",
    images: [
      {
        preview:
          "https://content1.rozetka.com.ua/goods/images/preview/151054150.jpg",
      },
    ],
    price: {
      old: 496,
      current: 249,
    },
    badge: "sale",
  },
  {
    id: 14606558,
    href: "https://hard.rozetka.com.ua/ua/kingston_sa400s37_480g/p14606558/",
    title: 'Kingston SSDNow A400 480GB 2.5" SATAIII 3D V-NAND (SA400S37/480G)',
    images: [
      {
        preview:
          "https://content1.rozetka.com.ua/goods/images/preview/172239507.jpg",
      },
    ],
    price: {
      old: 1296,
      current: 559,
    },
    badge: "new",
  },
  {
    id: 114194984,
    href: "https://rozetka.com.ua/ua/finish_5997321736280/p114194984/",
    title:
      "Таблетки для посудомийних машин FINISH All in 1 Max 94 шт. (5997321736280)",
    images: [
      {
        preview:
          "https://content1.rozetka.com.ua/goods/images/preview/191113870.jpg",
      },
    ],
    price: {
      old: 696,
      current: 349,
    },
    badge: "new",
  },
  {
    id: 224265469,
    href: "https://rozetka.com.ua/ua/catsan_4008429130403/p224265469/",
    title:
      "Наповнювач для котячого туалету Catsan Hygiene plus Мінеральний вбирний 4.9 кг (10 л) (4008429130403)",
    images: [
      {
        preview:
          "https://content.rozetka.com.ua/goods/images/preview/26038622.jpg",
      },
    ],
    price: {
      old: 1696,
      current: 1249,
    },
    badge: "sale",
  },
  {
    id: 5873133,
    href: "https://rozetka.com.ua/ua/frosch_4009175191908/p5873133/",
    title:
      "Таблетки для миття посуду в посудомийних машинах Frosch Сода 30 шт (4009175191908)",
    images: [
      {
        preview:
          "https://content.rozetka.com.ua/goods/images/preview/10693594.jpg",
      },
    ],
    price: {
      old: 1495,
      current: 1289,
    },
    badge: "new",
  },
  {
    id: 4918269,
    href: "https://rozetka.com.ua/ua/bells_5000387905474_5000387905634/p4918269/",
    title: "Віскі Bell's Original 0.7 л 40% (5000387905474_5000387905634)",
    images: [
      {
        preview:
          "https://content1.rozetka.com.ua/goods/images/preview/48122198.jpg",
      },
    ],
    price: {
      old: 498,
      current: 299,
    },
    badge: "sale",
  },
  {
    id: 23488125,
    href: "https://rozetka.com.ua/ua/ambassador_7612654000034/p23488125/",
    title: "Кава в зернах Ambassador Blue Label 1 кг (7612654000034)",
    images: [
      {
        preview:
          "https://content2.rozetka.com.ua/goods/images/preview/11251220.jpg",
      },
    ],
    price: {
      old: 633,
      current: 359,
    },
    badge: "sale",
  },
  {
    id: 24852941,
    href: "https://bt.rozetka.com.ua/ua/philips_mg5730_15/p24852941/",
    title: "Тример універсальний PHILIPS Series 5000 MG5730/15",
    images: [
      {
        preview:
          "https://content.rozetka.com.ua/goods/images/preview/11314684.jpg",
      },
    ],
    price: {
      old: 2599,
      current: 1999,
    },
    badge: "new",
  },
];

goods.forEach((item) => {
  const article = document.createElement("article");
  article.classList.add("product-list__item", "tile");
  article.setAttribute("data-id", item.id);

  article.innerHTML = `
        <a href="${item.href}" class="tile__link">
            <span class="tile__top">
                <span class="tile__badge tile__badge--${item.badge}">${item.badge}</span>
                <span class="tile__delete hidden"> 
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6043_11153)">
                        <path d="M2.03125 3.85352H12.9687" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.753 3.85352V12.3605C11.753 12.9681 11.1454 13.5757 10.5378 13.5757H4.46137C3.85373 13.5757 3.24609 12.9681 3.24609 12.3605V3.85352" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.06934 3.85341V2.63813C5.06934 2.03049 5.67697 1.42285 6.28461 1.42285H8.71517C9.32281 1.42285 9.93045 2.03049 9.93045 2.63813V3.85341" stroke="#EF3E33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_6043_11153">
                        <rect width="14.5833" height="14.5833" fill="white" transform="translate(0.208008 0.208008)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
            </span>
            <span class="tile__image">
                <img src="${item.images[0].preview}" alt="${item.title}">
            </span>
            <span class="tile__title">${item.title}</span>
            <span class="tile__info">
            <span class="tile__price">
                <span class="tile__old-price">${item.price.old} ₴</span>
                <span class="tile__new-price">${item.price.current} ₴</span>
            </span>
                <button class="btn">Купити</button>
            </span>
        </a>
    `;
  document.querySelector(".product-list").appendChild(article);
});

function changeHeader(nameHead, addressHead) {
  localStorage.getItem("name") !== "" || localStorage.getItem("surname") !== ""
    ? (nameHead.innerHTML = `${localStorage.getItem(
        "name"
      )} ${localStorage.getItem("surname")}`)
    : (nameHead.innerHTML = "");

  localStorage.getItem("address") !== ""
    ? (addressHead.innerHTML = `${localStorage.getItem("address")}`)
    : (addressHead.innerHTML = "");
}

function fillForm() {
  const userName = document.querySelector(".js-user-name");
  const userSurname = document.querySelector(".js-user-surname");
  const userTel = document.querySelector(".js-user-tel");
  const userEmail = document.querySelector(".js-user-email");
  const userAddress = document.querySelector(".js-user-address");
  const rememberMe = document.querySelector(".js-checkbox");

  let userNameHead = document.querySelector(".user-info__name");
  userNameHead.innerHTML = "";
  let userAddressHead = document.querySelector(".user-info__address");
  userAddressHead.innerHTML = "";

  let orderForm = document.querySelector(".order-form");
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (rememberMe.checked === true) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("surname", userSurname.value);
      localStorage.setItem("tel", userTel.value);
      localStorage.setItem("email", userEmail.value);
      localStorage.setItem("address", userAddress.value);
    } else {
      localStorage.clear();
      localStorage.setItem("name", "");
      localStorage.setItem("surname", "");
      localStorage.setItem("tel", "");
      localStorage.setItem("email", "");
      localStorage.setItem("address", "");
    }
    changeHeader(userNameHead, userAddressHead);
  });

  userName.value = localStorage.getItem("name");
  userSurname.value = localStorage.getItem("surname");
  userTel.value = localStorage.getItem("tel");
  userEmail.value = localStorage.getItem("email");

  userAddress.value = localStorage.getItem("address");

  let smt = localStorage.getItem("name");
  console.log(smt);

  changeHeader(userNameHead, userAddressHead);
}

fillForm();
