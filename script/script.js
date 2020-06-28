document.addEventListener("DOMContentLoaded", () => {
  const createPostInput = document.querySelector(".create-post-input"),
        postLike = document.querySelector("#post-like")
        likeCount = document.querySelector("#like-count");


  const handlerCreatePost = (event) => {
    const target = event.target;
    if ((!target.classList.contains("create-post-input") && (createPostInput.textContent === '')) || 
      (event.keyCode === 27 && (createPostInput.textContent === ''))) {
      createPostInput.textContent = 'What’s on your mind, Daniel?';
      createPostInput.style.color = "#8C8C8C";
    }
    if (event.keyCode === 27) createPostInput.blur();
  }

  document.addEventListener("click", handlerCreatePost);
  document.addEventListener("keyup", handlerCreatePost);

  createPostInput.addEventListener("click", (event) => {
    if (createPostInput.textContent === 'What’s on your mind, Daniel?') {
      createPostInput.textContent = "";
    }
    createPostInput.style.color = "#595959";
  });

  postLike.addEventListener("click", () => {
    let like = likeCount.textContent; 
    likeCount.textContent = ++like;
  })


});