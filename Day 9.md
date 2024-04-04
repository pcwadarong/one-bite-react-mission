## React.js는 어떤 기술인가요?

사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리로, Facebook에서 개발되어 싱글 페이지 애플리케이션(SPA) 및 웹 애플리케이션의 프론트엔드를 개발하기 위해 많이 사용됩니다.
가상 DOM 개념을 활용하여 UI를 효율적으로 렌더링하며, 재사용이 용이한 컴포넌트를 기반으로 하여 UI를 작은 조각으로 나누고 유지 보수할 수 있도록 합니다. 대규모 프로젝트의 UI 관리가 수월하여 현재 많이 사용되고 있는 기술입니다.

## React.js는 왜 사용되나요?

### 가독성 및 유지보수성

React는 작은 UI 단위인 컴포넌트를 기반으로 코드를 작성하기 때문에, 각 컴포넌트는 독립적으로 작동하며 재사용이 가능합니다.

### 가상 DOM

React는 가상 DOM을 사용하여 실제 DOM과의 상호 작용을 최소화합니다.
이는 상태 변화에 따른 컴포넌트의 업데이트를 가능하게 하기 때문에 애플리케이션의 성능을 향상시키고 사용자 경험을 향상시킵니다.

### 대중적인 지원 및 커뮤니티

React는 개발자 커뮤니티에서 매우 대중적인 기술이기 때문에 다양한 라이브러리와 프레임워크가 개발되어 있으며, 버그 발생시 해결하기가 용이합니다. 공식 문서 및 다양한 온라인 자료가 풍부하여 학습하기 좋습니다.

## React App은 어떻게 생성할 수 있나요?

React는 npm(Node.js의 기본 패키지 관리자)의 라이브러리이기 때문에 Node.js 패키지를 먼저 생성해야 한 후 설치해야 합니다. 하지만 이 경우 직접 설정들을 손봐야 하기 때문에 기본 설정이 완료된 Vite를 사용합니다. 리액트 공식 문서에서도 이를 권장하고 있습니다. `npm create vite@latest`로 vite를 설치하면 기본으로 설정된 `react`, `react-dom`, `eslint` 등을 볼 수 있습니다.

## React App은 어떻게 구동되나요?

Vite를 통해 생성된 React App에는 웹 서버가 내장되어 있는데, `package.json` 에 등록된 `npm run dev` 스크립트를 통해 웹 서버를 구동하면 localhost 주소로 브라우저에 접속할 수 있습니다. 해당 주소는 `https://localhost:3000`의 형식으로 이루어져 있는데, localhost는 내 컴퓨터의 주소를 가리키고, 3000은 포트(port) 번호입니다. 이렇게 되면 리액트의 웹 서버가 요청될 때, 컴퓨터는 여러 개의 서버 주소 중 3000에 해당하는, 내 컴퓨터의 주소를 찾아 구동할 수 있습니다.