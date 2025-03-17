function getLivros(req, res) {
  try {
    res.send("João");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
};
