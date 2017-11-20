const fs = require("fs");
const dictionary_data = require("./dictionary_data");
const exact_matches = require("./searches").exact_matches

function loader(choice, files) {
  // Start listening to STDIN
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  var onData = (data) => {
    data = data.trim();
    let path = choice;
    let dictionary;

    if (data === "q") {
      process.exit();
    } else if (parseInt(choice) < 1 || parseInt(choice) > files.length) {
      console.log("Please choose a valid dictionary option.");
    } else {
      fs.readFile(`../../data/${path}`, (err, data) => {
        if (err) {
          console.log('error');
        }
        dictionary = JSON.parse(data);
        console.log("Successfully loaded: dictionary.json!");
        dictionary_data(dictionary);
        process.stdin.pause();
        process.stdin.removeListener("data", onData);
        searching();
      });
};

}
 process.stdin.on("data", onData);
}

  function searching () {
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        // placeholder for search module
        console.log("What kind of search?");
        console.log("1: Exact");
        console.log("2: Partial");
        console.log("3: Begins With");
        console.log("4: Ends With");
    var onData = data => {
            data = data.trim();
   
      console.log("what word do you want?")
       exact_matches(data);
         process.stdin.pause();
      process.stdin.removeListener("data", onData);

      // ----------------------------------------
      // Go to next view here
      // ----------------------------------------
   
    
  };
       /* switch(parseInt(data)) {
          case '1':
            console.log("What are you looking for?")
            console.log(data)

          default: console.log("enter a valid choice")
              }*/




        console.log("What word are you looking for?")
          
  
   process.stdin.on("data", onData);
}

      // Set the listener
     

module.exports = loader;
