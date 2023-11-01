// h1 태그를 생성합니다.
const h1Element = document.createElement("h1");
h1Element.textContent = "ESM";

// div#root 요소를 찾습니다.
const rootElement = document.getElementById("root");

// div#root에 h1 태그를 추가합니다.
rootElement.appendChild(h1Element);
