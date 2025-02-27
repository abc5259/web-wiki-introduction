console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

const commentForm = document.getElementById("comment-form");
const commentList = document.getElementsByClassName("comment-list");

commentForm.addEventListener("submit", e => {
  e.preventDefault();
  const commentInput = e.target["comment"];
  commentList[0].innerHTML =
    commentList[0].innerHTML +
    `
    <li>
              <div class="comment-item">
                <div class="comment-author">
                  <img
                    src="./images/comment-author-icon.png"
                    alt="사용자 프로필 이미지"
                  />
                  <span>방문자</span>
                </div>
                <div class="comment-content">
                  ${commentInput.value}
                </div>
              </div>
            </li>
  `;
  commentInput.value = "";
});
