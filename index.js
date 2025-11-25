const main = document.getElementById("main")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: 0
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: 0
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: 0
    }
]
const heart = "images/icon-heart.png"

function renderPost(){
    main.innerHTML= ""
    for(let i=0; i<posts.length; i++){
        main.innerHTML +=`
        <section class="uplouder-info">
            <img src="${posts[i].avatar}" alt="profile picture of ${posts[i].name}" class="profile pointer">
            <div>
                <h1 class="pointer">${posts[i].name}</h1>
                <p class="pointer">${posts[i].location}</p>
            </div>
        </section>

        <section class="post" data-index="${i}">
            <img src="${posts[i].post}" alt="post from ${posts[i].name}">
        </section>

        <section class="interaction">
            <div>
                <img src="${posts[i].liked ? 'images/heart.png': 'images/icon-heart.png'}" alt="like" class="like-btn pointer" data-index="${i}">
                <img src="images/icon-comment.png" alt="comment" class="pointer">
                <img src="images/icon-dm.png" alt="dm" class="pointer">
            </div>
            <p class="likes bold-text">${posts[i].likes} likes</p>
            <div class="comment-section">
                <p class="username"><span class="bold-text">${posts[i].username}</span>  ${posts[i].comment}</p>
            </div>
        </section>
        `
    }
    setupLikeButtons()
    setupDoubleClick()

}

function setupLikeButtons() {
    const likeButtons = document.querySelectorAll(".like-btn");

    for (let i = 0; i < likeButtons.length; i++) {

        likeButtons[i].addEventListener("click", function () {

            const index = this.getAttribute("data-index");

            if (posts[index].liked) {
                posts[index].likes--;     // unlike
                posts[index].liked = false;
            } else {
                posts[index].likes++;     // like
                posts[index].liked = true;
            }
            
            renderPost();
        });
    }
}

function setupDoubleClick(){
    const post = document.querySelectorAll(".post")

    for (let i = 0; i < post.length; i++) {
        post[i].addEventListener('dblclick', function(){

            const index = this.getAttribute("data-index");

            if (posts[index].liked) {
                posts[index].likes--;     // unlike
                posts[index].liked = false;
            } else {
                posts[index].likes++;     // like
                posts[index].liked = true;
            }

            renderPost();
        })
    }
}

renderPost()

