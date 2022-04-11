const init = () => {
  document.addEventListener("DOMContentLoaded", (e) => {
    Toggle();
  });
};

let value = 0;
const dialog = document.querySelector("dialog");
const selection = document.querySelector(".selection-message");

const Toggle = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".rating-stars .rating-button")) {
      document
        .querySelectorAll(".rating-button")
        .forEach((Element) =>
          Element.matches("checked" && Element.classList.remove("checked"))
        );
      console.log(value);
      toggleButton(e);
    }
    if (e.target.matches(".submit-button")) {
      e.preventDefault();
      toggleModal();
    }
  });
};

const toggleButton = (e) => {
  console.log(e.target.dataset.value);
  value = e.target.dataset.value;
  e.target.classList.toggle("checked");
};
const toggleModal = () => {
  try {
    setTimeout(() => {
      try {
        dialog.classList.remove("component", "modal").close();
      } catch (error) {}
    }, 3000);
    selection.textContent = `You selected ${value} out of 5`;
    dialog.classList.add("component", "modal").showModal();
  } catch (error) {
    console.log(error);
  }
};
init();
