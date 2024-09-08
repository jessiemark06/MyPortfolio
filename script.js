function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if(menuBth.className === "nav-menu"){
         menuBth.className += " responsive";
    }else{
        menuBth.className = "nav-menu";
    }
}
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

        toggleSwitch.addEventListener("click", ()=> {
            body.classList.toggle("dark");

        }); var typingEffect = new Typed(".typedText", {
            strings: ["Student", "Freelancer", "Developer"],

            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,

        }) 
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal(".featured-name", {delay:100});
        sr.reveal(".text-info", {delay:200});
        sr.reveal(".text-btn", {delay:200});
        sr.reveal(".social-icons", {delay:200});
        sr.reveal(".featured-image", {delay:200});

        sr.reveal(".project-box", {interval:200});

        sr.reveal(".top-header", {});

        const srLeft = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        })
        srLeft.reveal(".about-info", {delay: 100});
        srLeft.reveal(".contact-info", {delay: 100});

        const srRight = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        })
        srRight.reveal(".skill", {delay: 100});
        srRight.reveal(".skill-box", {delay: 100});


        const sections = document.querySelectorAll(".section[id]");
        
        function scrollActive() {
            const scrollY = window.scrollY;
        
            // Remove active class from all nav links
            document.querySelectorAll(".nav-menu a").forEach(link => {
                link.classList.remove("active-link");
            });
        
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");
        
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document
                        .querySelector(".nav-menu a[href*=" + sectionId + "]")
                        .classList.add("active-link");
                }
            });
        
            // Add active class to Home when at the top of the page
            if (scrollY < 50) {
                document
                    .querySelector(".nav-menu a[href*='home']")
                    .classList.add("active-link");
            }
        }
        
        window.addEventListener("scroll", scrollActive);
        
        function openFacebook() {
            window.open('https://www.facebook.com/jessiemark.gualinbaronda.7', '_blank');
        }
        
 
        function downloadCV() {
            const cvUrl = 'C:/Users/user/Documents.resume.docs'; 
            window.location.href = cvUrl;
        }


