document.addEventListener("DOMContentLoaded", () => {
  const createPostInput = document.querySelector(".create-post-input"),
        postLike = document.querySelector("#post-like"),
        likeCount = document.querySelector("#like-count"),
        shareBtn = document.querySelector(".post-footer-item__share"),
        shareModal = document.querySelector(".share-modal"),
        mainContainer = document.querySelector(".container");

  const handlerKeyEsc = (event) => {
    if (event.keyCode === 27) {
      shareModal.classList.remove('fadeUpShareModal');
      shareModal.classList.add('disFadeUpShareModal');
    }
  };

  const handlerCreatePost = (event) => {
    const target = event.target;
    if ((!target.classList.contains("create-post-input") && (createPostInput.textContent === '')) || 
      (event.keyCode === 27 && (createPostInput.textContent === ''))) {
      createPostInput.textContent = 'What’s on your mind, Daniel?';
      createPostInput.style.color = "#8C8C8C";
    }
    if (event.keyCode === 27) createPostInput.blur();
  }


  const appearShareModal = event => {
    const shareBtnTarget = event.target.closest('.post-footer-item__share');
    if (shareBtnTarget) {
      shareModal.classList.remove('disFadeUpShareModal');
      shareModal.classList.add('fadeUpShareModal');
    }
  };

  const dissappearShareModal = event => {
    const shareBtnTarget = event.target.closest('.post-footer-item__share'),
          shareModalTarget = event.target.closest('.share-modal');
    if (!shareBtnTarget && !shareModalTarget) {
      shareModal.classList.remove('fadeUpShareModal');
      shareModal.classList.add('disFadeUpShareModal');
    }
  };

  createPostInput.addEventListener("click", (event) => {
    if (createPostInput.textContent === 'What’s on your mind, Daniel?') {
      createPostInput.textContent = "";
    }
    createPostInput.style.color = "#595959";
  });

  postLike.addEventListener("click", () => {
    let like = likeCount.textContent; 
    likeCount.textContent = ++like;
  });

  document.addEventListener("click", handlerCreatePost);
  document.addEventListener("keyup", handlerCreatePost);

  shareBtn.addEventListener("mouseover", appearShareModal);
  mainContainer.addEventListener("mouseout", dissappearShareModal);
  document.addEventListener("keyup", handlerKeyEsc);

});