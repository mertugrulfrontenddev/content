let boxes = document.querySelectorAll(".boxes.box-up");

let lastBox = document.querySelector(".content:last-child").firstElementChild;

let firstBox = document.querySelector(".content:first-child").firstElementChild;

let singleClickTimer;
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (singleClickTimer) {
      clearTimeout(singleClickTimer);
    }

    singleClickTimer = setTimeout(() => {
      if (lastBox !== box && firstBox !== box) {
        if (!box.classList.contains("up") && !box.classList.contains("down")) {
          box.classList.add("up");
        } else {
          box.classList.remove("up");
        }
      } else {
        if (lastBox === box) {
          box.classList.toggle("right");
        } else {
          box.classList.toggle("left");
        }
      }
    }, 500);
  });

  box.addEventListener("dblclick", (e) => {
    clearTimeout(singleClickTimer);
    if (!box.classList.contains("down") && !box.classList.contains("up")) {
      box.classList.add("down");
    } else {
      box.classList.remove("down");
    }
  });
});
