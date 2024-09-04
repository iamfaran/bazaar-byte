const login = (req, res) => {
  res.send("Login");
};

const signup = (req, res) => {
  res.send("Sign UP");
};

const logout = (req, res) => {
  res.send("Logout");
};

export { login, signup, logout };
