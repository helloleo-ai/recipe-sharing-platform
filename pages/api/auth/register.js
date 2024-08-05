export default function handler(req, res) {
  const { email, password } = req.body;

  // Dummy user registration for demonstration
  const user = { id: Date.now(), email, password };

  // In a real application, you would save the user to the database here

  res.status(201).json({ message: 'User registered successfully' });
}
