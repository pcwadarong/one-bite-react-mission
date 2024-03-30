// Quiz 1 : 배열 분할 후 재결합

function splitAndCombine(arr) {
  const spliced = arr.splice(arr.length / 2, arr.length);
  return [...spliced, ...arr];
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(splitAndCombine(arr));

// --------------------------------------
// Quiz 2 : 클릭 이벤트 로그 처리하기

function printClickEventLogs(logs) {
  for (let log of logs) {
    if (log.type === "click") {
      const date = new Date(log.date).toLocaleString();
      console.log(`${log.type} :: ${date}`);
    }
  }
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);


// --------------------------------------
// Quiz 3 : 카페 할인가 제공

function getDiscountedMenus(menus) {
  for (let menu of menus) {
    menu.discountedPrice = menu.price - 500;
    console.log(menu);
  }
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

// --------------------------------------
// Quiz 4 : 출간인 기준 도서 정리

function getSortedBooks(books) {
  return books.sort((a, b) => b.published.getTime() - a.published.getTime());
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
