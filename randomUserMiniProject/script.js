fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const dataObj = data.results[0];
    user = {
      name: dataObj.name.first + " " + dataObj.name.last,
      email: dataObj.email,
      phone: dataObj.phone,
      location: dataObj.location.city + " " + dataObj.nat,
      age: dataObj.dob.age,
      imageSrc: dataObj.picture.medium,
    };
    plist = document.querySelectorAll("div p");
    plist[0].lastChild.textContent = user.name;
    plist[1].lastChild.textContent = user.email;
    plist[2].lastChild.textContent = user.phone;
    plist[3].lastChild.textContent = user.location;
    plist[4].lastChild.textContent = user.age;
    document.querySelector("div img").src = user.imageSrc;
  });
