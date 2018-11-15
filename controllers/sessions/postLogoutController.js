module.exports = function(req, res) {
  req.session.destroy(function(err){
    if (err){
      console.log(err);
      res.status(500).json(null);
    } else {
      res.json(null);
    }
  });
};
