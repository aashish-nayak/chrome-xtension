fetch("https://icanhazdadjoke.com/slack")
  .then((res) => res.json())
  .then((out) => {
    document.getElementById("joke").innerHTML = out.attachments[0].text;
  })
  .catch((err) => console.error(err));
