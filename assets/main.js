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
    let sectext = `
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
            <input type="button">
            <div class="like_post">${post.likes}</div>
        </div>
    </div>
    `
    postArea.insertAdjacentHTML('beforeend',sectext)
}



posts.forEach((post,index) => {
    createPost(post);
    console.log('hi');
})
