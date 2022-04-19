const posts = [
    {
        id: 120394,
        name_user: 'marcoM',
        foto_user: 'user',
        date: 'mm-gg-yyyy',
        text: 'text post',
        likes: 12,
    },
    {
        id: 120394,
        name_user: 'marcoM',
        foto_user: 'user',
        date: 'mm-gg-yyyy',
        text: 'text post',
        likes: 12,
    },
    {
        id: 120394,
        name_user: 'marcoM',
        foto_user: 'user',
        date: 'mm-gg-yyyy',
        text: 'text post',
        likes: 12,
    }
]

const postArea = document.querySelector('.post_area')

function createPost(post){
    return `
    <div class="post">
        <div class="head_post">
            <div class="icon_logo">${post.foto_user}</div>
            <span class="post_user">${post.name_user}</span>
            <div class="post_date">${post.date}</div>
        </div>
        <div class="main_post">
            <p class="text_post">${post.text}</p>
            <div class="img_post">${post.foto_user}</div>
        </div>
        <div class="foot_post">
            <button id="like">click me</button>
            <div class="like_post">${post.likes}</div>
        </div>
    </div>
    `
}

/** 
	 * Generate product cards inside the dom element 
	 * @param {array} post_array A list of products 
	 * @param {object} dom_element a dom element 
	 */ 
function generatePostCard(post_array, dom_element){
    post_array.forEach(post => {
        const markup = createPost(post)

        dom_element.insertAdjacentHTML('beforeend', markup)
    })
}

const likes_post = posts.map((post) => post.likes)
console.log(likes_post);

generatePostCard(posts,postArea)

document.querySelectorAll('#like').forEach(element => {
    element.addEventListener('click',function(){
        
    })
})
