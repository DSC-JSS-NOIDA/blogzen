"use strict ";

var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");
var loginUsernameBtn = document.getElementById("loginUsernameBtn");
var signupUsernameBtn = document.getElementById("signupUsernameBtn");
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");
var loginUsernameModal = document.getElementById("loginUsernameModal");
var signupUsernameModal = document.getElementById("signupUsernameModal");
const loginLink1 = document.getElementById("login-link1");
const loginLink2 = document.getElementById("login-link2");
const signupLink1 = document.getElementById("signup-link1");
const signupLink2 = document.getElementById("signup-link2");

loginBtn.addEventListener("click", function () {
  openModal(loginModal);
  console.log("login btn clicked");
});

signupBtn.addEventListener("click", function () {
  openModal(signupModal);
});

// anchor link event listeners

loginLink1.addEventListener("click", function () {
  openModal(loginModal);
  closeModal(signupModal);
});

signupLink1.addEventListener("click", function () {
  openModal(signupModal);
  closeModal(loginModal);
});

loginLink2.addEventListener("click", function () {
  openModal(loginModal);
  closeModal(signupUsernameModal);
});

signupLink2.addEventListener("click", function () {
  openModal(signupModal);
  closeModal(loginUsernameModal);
});

loginUsernameBtn.addEventListener("click", function () {
  closeModal(loginModal);
  openModal(loginUsernameModal);
});

signupUsernameBtn.addEventListener("click", function () {
  closeModal(signupModal);
  openModal(signupUsernameModal);
});

function openModal(modal) {
  modal.style.display = "block";
  modal.addEventListener("click", closeModalOutside);
}

function closeModal(modal) {
  modal.style.display = "none";
  modal.removeEventListener("click", closeModalOutside);
}

function closeModalOutside(event) {
  if (event.target === this) {
    var modalId = this.id;
    closeModal(document.getElementById(modalId));
  }
}
