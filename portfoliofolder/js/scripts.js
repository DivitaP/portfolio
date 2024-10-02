/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const educationItems = document.querySelectorAll(".education-item");
    
        const showItem = (item) => {
            item.classList.add("show");
        };
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        showItem(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );
    
        educationItems.forEach((item) => {
            observer.observe(item);
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const skillsSection = document.querySelector("#skills");
    
        const showSection = (section) => {
            section.classList.add("show");
        };
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        showSection(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );
    
        observer.observe(skillsSection);
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const awardsSection = document.querySelector("#awards");
    
        const showSection = (section) => {
            section.classList.add("show");
        };
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        showSection(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );
    
        observer.observe(awardsSection);
    });
    
    

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Function to handle the visibility of sections on scroll
    $(document).ready(function() {
        // Function to check which section is in the viewport
        function checkVisibility() {
            $('.resume-section').each(function() {
                const sectionTop = $(this).offset().top;
                const sectionHeight = $(this).outerHeight();
                const scrollPosition = $(window).scrollTop() + $(window).height();

                if (scrollPosition > sectionTop + sectionHeight / 4) {
                    $(this).addClass('visible');
                } else {
                    $(this).removeClass('visible');
                }
            });
        }

        // Check visibility on scroll
        $(window).on('scroll', checkVisibility);

        // Check visibility on page load
        checkVisibility();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const timelineItems = document.querySelectorAll(".timeline-item");
    
        const showItem = (item) => {
            item.classList.add("show");
        };
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        showItem(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );
    
        timelineItems.forEach((item) => {
            observer.observe(item);
        });
    });
    
    

    document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');

    const observerOptions = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the card is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card); // Observe each project card
    });
});


})(jQuery); // End of use strict
