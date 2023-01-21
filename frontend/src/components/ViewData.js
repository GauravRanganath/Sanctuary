function ViewData() {

  // Retrieve Estuary files
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY"); // Put the Bearer key in a variable

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.estuary.tech/content/list", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    return (
      <div>
        <h1>View Data</h1>
      </div>
    );
  }
  
  export default ViewData;
