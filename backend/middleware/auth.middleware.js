import jwt from "jsonwebtoken"; // Import the jsonwebtoken library for token verification
import User from "../models/user.model.js"; // Import the User model for database queries

export const protectRoute = async (req, res, next) => {
  try {
    // Extract the access token from the request cookies
    const accessToken = req.cookies.accessToken;

    // If no access token is found in the cookies, return a 401 Unauthorized response
    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No access token provided" });
    }

    try {
      // Verify the access token using the secret key
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

      // Find the user in the database using the userId from the decoded token
      // The .select("-password") excludes the password field from the returned user object
      const user = await User.findById(decoded.userId).select("-password");

      // If no user is found with the ID from the token, return a 401 Unauthorized response
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Attach the user object to the request for use in subsequent middleware or route handlers
      req.user = user;

      // Call the next middleware or route handler
      next();
    } catch (error) {
      // If the token has expired, return a 401 Unauthorized response
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Unauthorized - Access token expired" });
      }
      // If it's any other error, re-throw it to be caught by the outer catch block
      throw error;
    }
  } catch (error) {
    // Log any errors that occur during the protection process
    console.log("Error in protectRoute middleware", error.message);
    // Return a 401 Unauthorized response for any other errors
    return res
      .status(401)
      .json({ message: "Unauthorized - Invalid access token" });
  }
};

export const adminRoute = (req, res, next) => {
  // Check if there's a user object on the request and if their role is "admin"
  if (req.user && req.user.role === "admin") {
    // If the user is an admin, call the next middleware or route handler
    next();
  } else {
    // If the user is not an admin, return a 403 Forbidden response
    return res.status(403).json({ message: "Access denied - Admin only" });
  }
};
