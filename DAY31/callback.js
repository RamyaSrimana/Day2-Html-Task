function name(user, callback) {
  console.log("Hello " + user);
  callback();
}

function done() {
  console.log("Callback executed");
}

name("Ramya", done);