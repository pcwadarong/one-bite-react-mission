// Quiz 1 : 책 정보 출력하기 (구조분해할당)

function printMovieReview({ title, releaseYear, reviewers }) {
  const [firstReviewer = "리뷰어 미정"] = reviewers;
  const lastReviewer =
      reviewers.length > 0 ? reviewers[reviewers.length - 1] : "리뷰어 미정";
  
  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
  console.log(`최신 리뷰어 : ${lastReviewer}`);
}

printMovieReview({
  title: "오펜하이머",
  releaseYear: 2023,
  reviewers: ["이정환", "김효빈", "김고은"],
});

// 제목 : 오펜하이머
// 개봉 : 2023
// 첫 번째 리뷰어 : 이정환
// 최신 리뷰어 : 김고은

printMovieReview({
  title: "웡카",
  releaseYear: 2024,
  reviewers: [],
});

// 제목 : 웡카
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정
// 최신 리뷰어 : 리뷰어 미정

// --------------------------------------
// Quiz 2 : 성적 평균 구하기

function printAvgScore(students) {
    for (let student in students) {
      const scores = students[student]["scores"];
      const average =
        scores.reduce((answer, curr) => answer + curr, 0) / scores.length;
      console.log(student + ': ' + average);
    }
  }
  
  printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
  });

// 이정환: 30
// 김효빈: 64
// 홍길동: 58
