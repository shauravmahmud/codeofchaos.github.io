const posts = [
    { title: 'Example Post', file: 'posts/example-post.md' }
];

function loadPost(postFile) {
    fetch(postFile)
        .then(response => response.text())
        .then(text => {
            const content = marked(text);
            document.getElementById('post-content').innerHTML = content;
        });
}

function init() {
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = post.title;
        a.addEventListener('click', () => {
            loadPost(post.file);
        });
        li.appendChild(a);
        postList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', init);
