// dummy authorize
const authorize = (req, res, next) => {
  // console.log("authorize");
  console.log(req.query);
  const user = req.query;

  if (user?.name === "jithin" && user?.id === "1") {
    req.user = user;
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
