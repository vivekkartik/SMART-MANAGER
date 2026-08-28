const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Assuming the token is sent in the Authorization header as "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    // Here you would typically verify the token with a library like jsonwebtoken
    // For now, we'll just call next() to proceed
    next();
};

export { authMiddleware }