// Add your code here
function submitData(userName, userEmail) {
    let formData = {
      name: userName,
      email: userEmail
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
      return fetch("http://localhost:3000/users", configObj)
          .then(function (response) {
              return response.json();
          })
          .then((object) => appendToTheDom(object))
      .catch((error) => document.body.innerHTML = error.message);
  }
  
  function appendToTheDom(object) {
      document.body.innerHTML = object.id ;
  }