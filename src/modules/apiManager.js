const remoteURL = "http://localhost:5002"

export default {

  connectToData(fetchObject) {

      let dataSet = fetchObject.dataSet;
      let embedItem = fetchObject.embedItem;
      let fetchType = fetchObject.fetchType;
      let dataBaseObject = fetchObject.dataBaseObject;
      let putId = fetchObject.putId;
      let deleteId = fetchObject.deleteId;

      if (fetchType == "GET") {

      return fetch(`${remoteURL}/${dataSet}${embedItem}`)
          .then(r => r.json()) // parses response to JSON

      } else if (fetchType === "POST"){

      // Default options are marked with *
      return fetch(`${remoteURL}/${dataSet}`, {
          method: `${fetchType}`, // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          // referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(dataBaseObject), // body data type must match "Content-Type" header
      })

      } else if(fetchType === "PUT"){
      return fetch(`${remoteURL}/${dataSet}/${putId}`, {
          method: `${fetchType}`, // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          // referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(dataBaseObject), // body data type must match "Content-Type" header
      })
      } else if (fetchType === "DELETE") {
      return fetch(`${remoteURL}/${dataSet}/${deleteId}`, {
          method: `${fetchType}`, // *GET, POST, PUT, DELETE, etc.
      })
      } else {
          console.log ("YOU SCREWED IT UP")
      }
  }
}