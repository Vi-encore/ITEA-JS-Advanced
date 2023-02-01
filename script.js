// 1. У своєму репозиторії створити нову гілку exchange_Прізвище.
// УВАГА!!! Бранчування повинно бути від гілки master ++++

// 2. Зареєструватися на сайті fixer.io
// та отримати свій унікальний ключ на кшталт "2mdQydldCNRNdpD1rPsBuVNNyaey0moo"
// Зробити запит на https://api.apilayer.com/fixer/latest?base=UAH&symbols=USD,EUR і підставляємо Ваш ключ apikey=Ваш_ключ
// Приклад функції, яка здійснює запит на API ++++

// async function getCurrency() {
//     let key = 'Ваш_ключ';
//     let url = `https://api.apilayer.com/fixer/latest?base=UAH&symbols=USD,EUR&apikey=${key}`;
//     ...
// }

// getCurrency(); +++

// 3. У розмітці є select з класом js-goods-currency. При зміні валюти у select варто перерахувати вартість всіх товарів до сотих.
// Напрклад, 549 ₴ ->  549*0.026054 => 14.30 € або 549*0.027219 => 14.94 $ +++++

// 4. Зробити обробку помилки як проміса (.catch)+++

// 5. Код заливаємо на гілку в репозиторій та робимо Pull request, де включити ментора та колегу по групі у список перевіряючих.
// 6. Перевірити код один одного, лишити зауваження в коментарях.

// Актуальний розподіл по групах та варіантах за посиланням
// https://docs.google.com/spreadsheets/d/1awtLN6TXabWYO6x4VBngJT30EC7KVg-9CCk5ljtEFMk/edit#gid=0
// *Якщо у Вас виникли проблеми з доступом, зверніться до інструктора https://t.me/olgaklimass

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
  article.classList.add("product-list__item", "tile", "js-product");
  article.setAttribute("data-id", item.id);

  article.innerHTML = `
        <a href="${item.href}" class="tile__link">
            <span class="tile__top">
                <span class="tile__badge tile__badge--${item.badge}">${item.badge}</span>
                <span class="tile__delete hidden js-delete-item"> 
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
                <button class="btn js-add-to-cart-btn">Купити</button>
            </span>
        </a>
    `;
  document.querySelector(".product-list").appendChild(article);
});

let popupCart = document.querySelector(".js-popup-cart");
let popupOrder = document.querySelector(".js-popup-order");
let showOrderBtn = document.querySelector(".js-show-order");
let popupCartList = document.querySelector(".js-popup-cart-list");
let headerCount = document.querySelector(".js-count");
let deleteButtons = document.querySelectorAll(".js-delete-item");
let buttons = document.querySelectorAll(".js-add-to-cart-btn");
let ids = localStorage.getItem("cart")?.split(", ") || [];

function deleteButton(ids) {
  let products = document.querySelectorAll(".js-product");
  products.forEach(function (product) {
    if (ids.includes(product.dataset.id)) {
      let deleteButton = product.querySelector(".js-delete-item");
      deleteButton.classList.remove("hidden");
    }
  });
}

function removeFromCart(parent, isPopup = false) {
  let id = parent.dataset.id;
  ids = ids.filter((item) => item != id);
  ids.length > 0
    ? localStorage.setItem("cart", ids.join(", "))
    : localStorage.removeItem("cart");
  setCount(ids.length);
  if (!isPopup) {
    let deleteButton = parent.querySelector(".js-delete-item");
    deleteButton.classList.add("hidden");
    let tileTitle = parent.querySelector(".tile__title").innerText;
    showNotification(tileTitle, "видалено");
  }
}

function setCount(num) {
  headerCount.innerText = num;
}

function addToCart(button) {
  let parent = button.closest(".product-list__item");
  let deleteButton = parent.querySelector(".js-delete-item");
  let id = parent.dataset.id;
  let tileTitle = parent.querySelector(".tile__title").innerText;

  deleteButton.classList.remove("hidden");
  ids.push(id);
  console.log(ids);
  localStorage.setItem("cart", ids.join(", "));
  setCount(ids.length);
  showNotification(tileTitle, "додано");
}

function showNotification(productName, text) {
  let notification = document.querySelector(".js-notification");
  let notificationText = document.querySelector(".js-notification-content");
  notification.classList.add("notification--active");
  notificationText.innerText = `Продукт ${productName} успішно ${text}!`;
  setTimeout(() => notification.classList.remove("notification--active"), 3000);
}

function showPopup(popup) {
  let popupClose = popup.querySelector(".js-popup-close");
  popup.classList.add("popup--active");
  popupClose.addEventListener("click", () => hidePopup(popup));
}

function hidePopup(popup) {
  popup.classList.remove("popup--active");
}

function showCartProducts(productIds) {
  popupCartList.innerHTML = "";
  goods.forEach((item) => {
    if (productIds.includes(String(item.id))) {
      let filtered = productIds.filter((el) => el === String(item.id));
      let counter = filtered.length;
      let itemList = document.createElement("li");
      itemList.className = "popup-cart__list-item cart-item";
      itemList.dataset.id = item.id;
      itemList.innerHTML = `<span class="cart-item__img">
                                    <img src="${item.images[0].preview}" alt="${
        item.title
      }">
                                </span>
                                <span class="cart-item__info">
                                    <a href="${
                                      item.href
                                    }" class="cart-item__link">
                                        <span class="cart-item__title">${
                                          item.title
                                        }</span>
                                        <span class="cart-item__price">
                                            <span class="tile__count">${counter}</span>
                                            <span class="tile__price">Вартість - ${
                                              item.price.current
                                            } ₴</span>
                                            <span class="tile__total-price">Сума - ${
                                              item.price.current * counter
                                            } ₴</span>
                                        </span>
                                    </a>
                                </span>
                                <span class="cart-item__remove js-cart-remove">
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
                                </span>`;
      popupCartList.appendChild(itemList);
    }
  });
  setPopupCartRemove();
}

function setPopupCartRemove() {
  let removeBtns = document.querySelectorAll(".js-cart-remove");

  removeBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
      let parent = btn.closest(".cart-item");
      parent.classList.add("hidden");
      removeFromCart(parent, true);
    })
  );
}

deleteButton(ids);
setCount(ids.length);

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    removeFromCart(btn.closest(".product-list__item"));
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(button);
  });
});

headerCount.addEventListener("click", () => {
  let ids = localStorage.getItem("cart")?.split(", ") || [];
  showCartProducts(ids);
  showPopup(popupCart);
});

showOrderBtn.addEventListener("click", () => {
  hidePopup(popupCart);
  showPopup(popupOrder);
});

async function getData(link) {
  let request = await fetch(link);
  return request.json();
}

function changePrice(currencyRate, currencySign) {
  for (let i = 0; i < goods.length; i++) {
    const newPrices = document.querySelectorAll(".tile__new-price");
    const oldPrices = document.querySelectorAll(".tile__old-price");

    let baseNew = goods[i].price.current;
    let baseOld = goods[i].price.old;
    newPrices[i].innerHTML = `${(
      baseNew * currencyRate
    ).toFixed()} ${currencySign}`;
    oldPrices[i].innerHTML = `${(
      baseOld * currencyRate
    ).toFixed()} ${currencySign}`;
  }
}

const changeCurrency = document.querySelector(".js-goods-currency");
changeCurrency.addEventListener("change", (event) => {
  event.preventDefault();

  let checker = event.target.value;
  const productList = document.querySelector(".product-list");

  let key = "ecw3YLTvb8V2xYolOezrH0YZHQtY2clp"; //working key
  // let key = "q25ebcnm65X2jSvhWZ3C6trBZFbAgCaJ"; // another working key
  // let key = "q25ebcnm65X2jSvhWZ3C6trBZFbAgCKJ"; //invalid key for error handling
  let url = `https://api.apilayer.com/fixer/latest?base=UAH&symbols=USD,EUR&apikey=${key}`;

  if (checker === "usd" || checker === "eur") {
    getData(url)
      .then((res) => {
        let usdRate = res.rates.USD;
        let eurDate = res.rates.EUR;

        switch (checker) {
          case "usd":
            changePrice(usdRate, "$");
            break;
          case "eur":
            changePrice(eurDate, "€");
            break;
        }
      })
      .catch((error) => {
        console.log(`API key doesn't work!`);

        const popupWrap = document.querySelector(".js-notification");
        const popupContent = document.querySelector(".js-notification-content");

        window.setTimeout(() => {
          popupWrap.classList.add("notification--active", "popup--error");
          popupContent.innerHTML =
            "Oops, something went wrong! Try again later!";
        }, 500);

        window.setTimeout(() => {
          popupWrap.classList.remove("notification--active", "popup--error");
        }, 3000);
      });
  } else {
    changePrice(1, "₴");
  }
});
