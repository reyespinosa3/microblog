console.log("Ready to go!");

//Get new blog post into array

const newPost = ["Love the background!"];

const readyToBlog = () => {
    let form = document.getElementById('microblogform');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      newPost.push(document.getElementById('microblogpost').value);
      // latestPosts();
      upDateList();
      document.getElementById('microblogpost').value = "";
    });
}

const upDateList = () => {
  let post = document.getElementById('microblogpost').value;
  let element = document.createElement("section");
  document.getElementById('postList').append(element);
  element.innerHTML = post;
}


// const latestPosts = () => {
//   document.getElementById('first').innerHTML = newPost[newPost.length - 1];
//   document.getElementById('second').innerHTML = newPost[newPost.length -2];
//   document.getElementById('third').innerHTML = newPost[newPost.length -3];
// }

window.onload=readyToBlog();
