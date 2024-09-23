import { useState } from 'react';
import supabase from '../services/supabase';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('Subscribers') 
      .insert({ email });

    if (error) {
      setStatus('Something went wrong!. Contact us at dev.lunox@gmail.com');
      console.error('Error subscribing:', error);
    } else {
      setStatus('Successfully subscribed!');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default EmailForm;
