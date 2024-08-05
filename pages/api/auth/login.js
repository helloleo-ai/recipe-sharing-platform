import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { email, password } = req.body;

  // Dummy user for demonstration
  const user = { id: 1, email: 'user@example.com', password: 'password' };

  if (email === user.email && password === user.password) {
    const token = jwt.sign({ id: user.id, email: user.email }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
