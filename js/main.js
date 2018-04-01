console.log("Ready to go!");

//Get new blog post into array

const newPost = ["Love the background!"];

//listens for submit button, puts new post into array
//envokes upDateList function and sets input to empty
const readyToBlog = () => {
    let form = document.getElementById('microblogform');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      newPost.push(document.getElementById('microblogpost').value);
      upDateList();
      document.getElementById('microblogpost').value = "";
    });
}
// adds new section and text for every post
const upDateList = () => {
  let post = document.getElementById('microblogpost').value;
  let element = document.createElement("section");
  document.getElementById('postList').append(element);
  element.innerHTML = post;
}

window.onload=readyToBlog();
