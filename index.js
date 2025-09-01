import express from "express";

const app = express();
const PORT = 3000;

//todo you can upload images


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  MyPosts.unshift(req.body["subject"]);
  MyTitles.unshift(req.body["title"]);
  // console.log("posts:", MyPosts);
  res.redirect("/");
});

app.post("/deletePost", (req, res) => {
  console.log(req.body);
  delete MyPosts[req.body["post"]];
  delete MyTitles[req.body["post"]];
  // console.log(MyPosts, MyTitles);
  
  res.redirect("/");
});
app.get("/updatePost", (req, res) => {
  console.log(req.query.index);
  res.render("updatePost.ejs", {
    post: MyPosts,
    title: MyTitles,
    index: Number(req.query.index),
  });
});
app.post("/updatePost", (req, res) => {
  console.log(req.body);
  MyPosts[Number(req.body["index"])] = req.body["subject"];
  MyTitles[Number(req.body["index"])] = req.body["title"];
  res.redirect("/");
});
app.get("/", (req, res) => {
  res.render("index.ejs", {
    posts: MyPosts,
    title: MyTitles,
  });
});

app.listen(PORT);

const MyTitles = [
  "Learning to Code",
  "Why Hobbies Matter",
  "The Power of Reading",
  "Healthy Habits",
  "Future of Space Exploration",
  "Artificial Intelligence Everywhere",
];
const MyPosts = [
  "Small daily choices shape our future. Drinking water, exercising, reading, or even taking a mindful walk can set the tone for the entire day. Building healthy habits isn’t about being perfect — it’s about consistency, and choosing progress over excuses.",
  "In a world that never stops moving, hobbies give us balance. Whether it’s painting, playing guitar, or even gaming, hobbies remind us that life isn’t only about work. They fuel creativity, reduce stress, and connect us to others who share our passions.",
  "Books are time machines, mentors, and friends all at once. Reading lets us travel to distant worlds, learn from brilliant minds, and expand our perspective. In just a few pages, we can change the way we see the world — and ourselves.",
  "Small daily choices shape our future. Drinking water, exercising, reading, or even taking a mindful walk can set the tone for the entire day. Building healthy habits isn’t about being perfect — it’s about consistency, and choosing progress over excuses.",
  "From the Moon to Mars and beyond, humanity’s dream of exploring space is becoming reality. New technologies and partnerships are pushing the limits of what we thought possible. The question is not if we will live among the stars, but when.",
  "From chatbots to self-driving cars, AI is shaping the way we live and work. It’s no longer a futuristic dream but part of our daily tools. The challenge ahead is using AI responsibly — balancing innovation with ethics.",
];