const fs = require("fs");
const exact_matches = require("./searches.js").exact_matches;
const loader = require("./loader.js");
let files;
const exact_matches = require("./searches").exact_matches
function welcome(){
  // Start listening to STDIN
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  let dictionary;
  // let files;
  
    let showmsg = (err) => {
    console.log("Welcome to the Node Dictionary Reader!");
    console.log("======================================");
    console.log("Enter q to quit");
    console.log("");
    console.log("Select a dictionary to load:");
    if (err) {
        console.log(err)
    };
   
    fs.readdir("../../data", (err, data) => {
        if (err) {
          throw err;
        }
        files = data;
        let i = 1;
        files.forEach(function(file) {
          console.log(`${i}. ${file}`);
          i++;
        });
      });
    }
  
    showmsg()
  // Display message
      var onData = data => {
    data = data.trim();
      if (data === "q"){
          process.exit()
      } else if
       (data === 'd') {
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
      }else {
          showmsg("wrong")
      }     
  };

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
  // Set the listener
  process.stdin.on("data", onData);
}

welcome();
