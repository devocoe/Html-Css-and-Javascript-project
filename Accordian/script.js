const accordians = document.getElementsByClassName("accordian");

for (let i = 0; i < accordians.length; i++) {
  const element = accordians[i];

  element.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    const content = e.target.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
}
