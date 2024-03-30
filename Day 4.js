const book = {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환",
};

//간결한 버전
console.log("publishedYear" in book ? `출판년도는 ${book.publishedYear}입니다.` : '출판년도 정보가 없습니다.');

//가독성 버전
let result = "publishedYear" in book;
console.log(result ? `출판년도는 ${book.publishedYear}입니다.` : '출판년도 정보가 없습니다.');
