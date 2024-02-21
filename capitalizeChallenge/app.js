class ToTitleCase {
  constructor() {
    this.myString = "developer";
  }

  solve() {
    const myNewString =
      this.myString.charAt(0).toUpperCase() + this.myString.slice(1);
    console.log(myNewString);
  }
}

new ToTitleCase().solve();
