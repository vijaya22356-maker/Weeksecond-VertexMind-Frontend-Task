const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all fields.";
    } 
    else {
        formMessage.textContent = "Form submitted successfully!";
        form.reset();
    }

});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});
const postsContainer = document.getElementById("posts");
postsContainer.textContent = "Loading posts...";
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {

        postsContainer.innerHTML = "";

        data.slice(0, 5).forEach(post => {

            const postItem = document.createElement("div");

            postItem.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            postsContainer.appendChild(postItem);

        });

    })
    .catch(error => {

        postsContainer.textContent = "Unable to load posts. Please try again later.";

    });