import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  // 1 get the token from header

  const authHeader = req.headers["authorization"];
  // console.log(authHeader,"This is authHeader")

  const pureToken = authHeader.split(" ")[1];
  // console.log(pureToken,"THis is pure token");
  if (!pureToken) {
    return res.status(401).json({
      message: "Token not found.",
    });
  }

  // 2. check if token is valid or not
  jwt.verify(pureToken, "this_is_privet_key", function (err, decoded) {
    console.log(decoded.foo) 
    if (err) {
      return res.status(401).json({
        message: "Token found but token invalide",
      });
    }
    console.log(decoded, "This is decoded");
    // 3. if token is valid then proceed forward else block the request
    next(); // bar
  });
};
