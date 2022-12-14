(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalAnim: document.querySelector("[data-modal-anim]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  // refs.closeModalBtn.addEventListener("click", toggleModalLast);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.modalAnim.classList.toggle("is-animated");
    // refs.modalAnim.classList.add("is-not-animated")
  }
  // function toggleModalLast() {
  //   refs.modalAnim.classList.remove("is-not-animated");
  // }
})();