const xhr = new XMLHttpRequest();
const btn = document.getElementById("joke-btn");

getJoke = () => {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status === 200) {
        document.getElementById("joke").innerText = JSON.parse(
          this.responseText
        ).value;
      } else {
        document.getElementById("joke").innerText =
          "Somenthing went wrong (Not Funny)";
      }
    }
  };
  xhr.send();
};

btn.onclick = getJoke;

getJoke();
