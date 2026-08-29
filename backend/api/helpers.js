import jsonwebtoken from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Assuming the token is sent in the Authorization header as "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: "Invalid token." });
        }
        req.userId = decoded.userId; // Attach the decoded token to the request object for further use
        next();
    });
};

export { authMiddleware }