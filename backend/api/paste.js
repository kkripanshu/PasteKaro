module.exports = async (req, res) => {
  if (req.method === 'POST') {
    // Your logic for creating a paste
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'Content is unavailable' });
    }

    // Create a paste and respond
    res.status(200).json({ message: 'Paste created successfully', uniqueLink: 'xyz123' });
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
};
