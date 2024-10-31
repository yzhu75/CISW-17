function random_greeting(name) {
    // assign new name
    let your_name = name;
    //define an array of greetings
      const greetings = [
      `👋Hello, ${your_name}!`,
      `🤣What is up, ${your_name}!`,
      `💀Yo, ${your_name}, what's up my dude?`,
      `😊Ciao, ${your_name}!`,
      `😘Salutations,  ${your_name}!`,
      `👌Hola, ${your_name}!`,
      `😎Hey, ${your_name}!`
      ];
    //pick a random greeting
      let x = Math.floor(Math.random() * greetings.length);
    //Log this to console
    console.log(greetings[x]);
  }
random_greeting("Firefox");
random_greeting("Joe Fortnite");
random_greeting("Steve");
random_greeting("John Pork");
random_greeting("obama");