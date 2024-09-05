import User from "../models/user.model.js";

const login = (req, res) => {
  res.send("Login");
};
const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });

    // send 200 status code for now
    res.status(201).json({ user, message: "User created successfully" });
    // TODO: still need to add JWT token
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

const logout = (req, res) => {
  res.send("Logout");
};

export { login, signup, logout };
