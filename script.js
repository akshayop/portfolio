// toggle navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll-Section

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove navbar after scrolled
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .about-container , .timeline, .skills-row, .contact form, .project-box",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img, .flip-back ", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "top" });

// sendmail

var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  var contactform = document.getElementById("contact-form-po");
  var name = document.getElementById("name").value;
  var phoneNo = document.getElementById("phoneNo").value;
  var email = document.getElementById("email").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var message = document.getElementById("message").value;
  var body =
    "Name: " +
    name +
    "<br> Email: " +
    email +
    "<br> Phone Number: " +
    phoneNo +
    "<br> Message: " +
    message;

  // console.log(emailSubject);

  Email.send({
    SecureToken: "0bc5f9fa-8210-4b6c-9a58-9cde47c9b633",
    To: "akshaynaik5787@gmail.com",
    From: "projectdevelopment87@gmail.com",
    Subject: emailSubject,
    Body: body,
  }).then((message) => {
    
    alert("Message successfully sent");
    
    
  });
  contactform.reset();
  return false;

});
