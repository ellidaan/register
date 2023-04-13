import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      const data = response.data;

      if (data.success) {
        // Connexion réussie, rediriger vers une autre page
        window.location.href = '/Test'; // Remplacer par l'URL de la page de tableau de bord
      } else {
        // Afficher un message d'erreur
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
    
      setError('Erreur lors de la connexion');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
