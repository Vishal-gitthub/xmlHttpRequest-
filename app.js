let img = document.querySelector(".image");
let name = document.querySelector(".name");
let flwrs = document.querySelector(".followers");

// {

let url = "https://api.github.com/users/vishalsharma";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    let data = JSON.parse(this.responseText);

    let apiImg = data.avatar_url;
    img.innerHTML = `<img src="${apiImg}">`;
    let toApiName = data.login;
    name.innerHTML = `Name: ${toApiName} `;
    let followers = data.followers;
    flwrs.innerHTML = `Followers ${followers}`;
  }
};
xhr.send();

// }
