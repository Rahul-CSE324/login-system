const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const toggleBtn = document.getElementById("toggleBtn");
const submitBtn = document.getElementById("submitBtn");

let isLogin = false;

toggleBtn.onclick = () => {
  isLogin = !isLogin;
  if (isLogin) {
    nameField.style.display = "none";
    title.innerText = "Login";
    submitBtn.innerText = "Login";
    toggleBtn.innerText = "Register";
  } else {
    nameField.style.display = "block";
    title.innerText = "Register";
    submitBtn.innerText = "Register";
    toggleBtn.innerText = "Login";
  }
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password || (!isLogin && !name)) {
    alert("Please fill in all required fields.");
    return;
  }

  if (isLogin) {
    alert(`Logged in as ${email}`);
  } else {
    alert(`Registered successfully as ${name}`);
  }

  this.reset();
});
