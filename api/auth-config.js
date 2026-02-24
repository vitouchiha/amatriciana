module.exports = (req, res) => {
  // Queste variabili vengono impostate nel dashboard Vercel (mai in Git)
  const email    = process.env.FB_EMAIL || '';
  const password = process.env.FB_PASS  || '';

  if (!email || !password) {
    return res.status(503).json({ error: 'Credenziali non configurate' });
  }

  // Nessuna cache: non vogliamo che browser o CDN memorizzino le credenziali
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.json({ email, password });
};
