
/*================================= EmailJs script ===================================*/

function sendMessage() {
  let params = {
    Name: document.getElementById("FullName").value,
    EmailID: document.getElementById("Email").value,
    Phone: document.getElementById("Phone").value,
    EmailSub: document.getElementById("EmailSubject").value,
    Message: document.getElementById("txtMessage").value,
  };

  if (
    params.EmailID !== "" &&
    params.Name !== "" &&
    params.Phone !== "" &&
    params.EmailSub !== "" &&
    params.Message !== ""
  ) {
    const ServiceID = "service_il6bgpq";
    const TemplateID = "template_c4ynmbp";

    emailjs
      .send(ServiceID, TemplateID, params)
      .then((res) => {
        document.getElementById("FullName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("EmailSubject").value = "";
        document.getElementById("txtMessage").value = "";
        alert("Message sent successfully!");
      })
      .catch((err) => console.log(err));
  }else{
    alert("!!!Please fill all the required fields !!!");
  }
}

/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    // if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  /*================================= sticky navbar ===================================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*================================= remove toggle icon and navbar ===================================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");


};

/*================================= scroll reveal ===================================*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "bottom" });



