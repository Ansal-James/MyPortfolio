  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // remove active from all
      navLinks.forEach(l => l.classList.remove('active'));
      // add active to clicked one
      this.classList.add('active');
    });
  });

  function sendMail(){
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
      const serviceID = "service_jsizprh";
    const templeateID = "template_xb5bju5";

    emailjs.send(serviceID,templeateID,parms)
    .then(
      res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully");
      }
    )
    .catch((err) => console.log(err));
  }





