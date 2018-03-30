console.log("Ready to go!");

//Get new blog post into array

const newPost = ["Nice site!", "Great Blog!", "Love the background!", "Show me how to do this!"];

const readyToBlog = () => {
    let form = document.getElementById('microblogform');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      newPost.push(document.getElementById('microblogpost').value);
      latestPosts();
      document.getElementById('microblogpost').value = "";
    });
}

const latestPosts = () => {
  document.getElementById('first').innerHTML = newPost[newPost.length - 1];
  document.getElementById('second').innerHTML = newPost[newPost.length -2];
  document.getElementById('third').innerHTML = newPost[newPost.length -3];
}

window.onload=readyToBlog();
