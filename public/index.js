const column = document.querySelectorAll(".cursor-pointer");
const detailBox = document.querySelectorAll(".absolute");

column[0].addEventListener("mouseover", function (event) {
      detailBox[0].classList.remove("hidden");
      detailBox[0].classList.add("flex");
    });
column[0].addEventListener("mouseout", function (event) {
  detailBox[0].classList.add("hidden");
  detailBox[0].classList.remove("flex");
});

column[1].addEventListener("mouseover", function (event) {
  detailBox[1].classList.remove("hidden");
  detailBox[1].classList.add("flex");
});
column[1].addEventListener("mouseout", function (event) {
detailBox[1].classList.add("hidden");
detailBox[1].classList.remove("flex");
});

column[2].addEventListener("mouseover", function (event) {
  detailBox[2].classList.remove("hidden");
  detailBox[2].classList.add("flex");
});
column[2].addEventListener("mouseout", function (event) {
detailBox[2].classList.add("hidden");
detailBox[2].classList.remove("flex");
});

column[3].addEventListener("mouseover", function (event) {
  detailBox[3].classList.remove("hidden");
  detailBox[3].classList.add("flex");
});
column[3].addEventListener("mouseout", function (event) {
detailBox[3].classList.add("hidden");
detailBox[3].classList.remove("flex");

});

column[4].addEventListener("mouseover", function (event) {
  detailBox[4].classList.remove("hidden");
  detailBox[4].classList.add("flex");
});
column[4].addEventListener("mouseout", function (event) {
detailBox[4].classList.add("hidden");
detailBox[4].classList.remove("flex");
});

column[5].addEventListener("mouseover", function (event) {
  detailBox[5].classList.remove("hidden");
  detailBox[5].classList.add("flex");
});
column[5].addEventListener("mouseout", function (event) {
detailBox[5].classList.add("hidden");
detailBox[5].classList.remove("flex");
});

column[6].addEventListener("mouseover", function (event) {
  detailBox[6].classList.remove("hidden");
  detailBox[6].classList.add("flex");
});
column[6].addEventListener("mouseout", function (event) {
detailBox[6].classList.add("hidden");
detailBox[6].classList.remove("flex");
});
