

//navbar scroll section


function scrollToSection(sectionClass) {
    const sections = document.getElementsByClassName(sectionClass);
    if (sections.length > 0) {
        const section = sections[0];
        section.scrollIntoView({ behavior: 'smooth' });
    }
}





//form validation



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');

    const fullnameInput = form.querySelector('input[name="fullname"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    fullnameInput.addEventListener('input', function () {
        const fullname = fullnameInput.value;
        if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(fullname)) {
            nameError.textContent = '*Name cannot contain numbers or special characters';
        } else {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('input', function () {
        const email = emailInput.value;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = '*Please enter a valid email address';
        } else {
            emailError.textContent = '';
        }
    });

    messageInput.addEventListener('input', function () {
        const message = messageInput.value;
        if (messageInput.value.length < 20 || messageInput.value.length > 200) {
            messageError.textContent = '*Message must be between 20-200 characters.';
        } else {
            messageError.textContent = '';
        }
    });

    form.addEventListener('submit', function (event) {
        if (nameError.textContent || emailError.textContent || messageError.textContent) {
            event.preventDefault();
        }
    });
});
          


//project category filter

document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll(".list button");
    const projectItems = document.querySelectorAll(".project-item");

    categoryButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const category = button.textContent.trim();
            projectItems.forEach(function(item) {
                if (category === "All") {
                    item.style.display = "block";
                } else {
                    const projectCategory = item.querySelector(".project-category").textContent.trim();
                    if (projectCategory === category) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
            categoryButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
});
