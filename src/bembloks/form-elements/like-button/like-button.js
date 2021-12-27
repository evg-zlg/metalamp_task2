document.querySelectorAll(".like-button__btn").forEach(function (likeButton) {
  likeButton.addEventListener("click", function() {
    if (likeButton.parentElement.classList.contains("like-button--pressed")) {
      likeButton.parentNode.children[1].textContent = "favorite_border";
      likeButton.textContent = String(Number(likeButton.textContent)-1);
    } else {
      likeButton.parentNode.children[1].textContent = "favorite";
      likeButton.textContent = String(Number(likeButton.textContent)+1);
    }
    likeButton.parentElement.classList.toggle("like-button--pressed");
  });
});