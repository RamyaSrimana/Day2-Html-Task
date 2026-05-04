function myPromise() {
  return new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
}
myPromise()
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });