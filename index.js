const express = requier("experss");
const bodyparser = require("bodyparser");
const cors = require("cors");

const app = express();
const port = 3000;

let jokes = [
  {
    id: 1,
    joke: "Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.",
  },
  {
    id: 2,
    joke: "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.",
  },
  {
    id: 3,
    joke: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants.",
  },
  {
    id: 4,
    joke: 'If you ask Chuck Norris what time it is, he always answers "Two seconds till". After you ask "Two seconds to what?", he roundhouse kicks you in the face.',
  },
  {
    id: 5,
    joke: "Chuck Norris lost his virginity before his dad did.",
  },
  {
    id: 6,
    joke: "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.",
  },
];

app.use(cors());

app.use(bodyparser.urlencoded({ extends: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("welcome to jike api");
});

app.get("/jokes", (req, res) => {
  res.send(jokes);
});

app.get("/randomjokes", (req, res) => {
  const joke = jokes[Math.flour(Math.random() * jokes.length)];
  res.send(joke);
});

app.post("/joke", (res, req) => {
  const newId = jokes[jokes.length - 1].id + 1;
  const joke = req.body;
  console.log(joke);
  jokes.push({ id: newId, joke: joke });
  res.send({ id: newId, joke: joke });
});

app.delete("/joke/:id", (res, req) => {
  const jokeId = req.params.id;
  const jokeIndex = jokes.findIndex((joke) => joke.id == jokeId);
  joke.splice(jokeIndex, 1);
  res.send({ message: "joke deleted " });
});

app.listen(port, () => console.log(`jokes api listening on port ${port}`));
