const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.get('/snooze', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'snooze.html'));
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'John Developer',
    title: 'Full Stack Developer',
    email: 'john.developer@email.com',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Database', level: 75 }
    ],
    projects: [
      {
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        tech: ['React', 'Node.js', 'MongoDB'],
        status: 'Completed'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Real-time data visualization dashboard',
        tech: ['Vue.js', 'D3.js', 'Express'],
        status: 'In Progress'
      },
      {
        title: 'Mobile App',
        description: 'Cross-platform mobile application',
        tech: ['React Native', 'Firebase', 'Redux'],
        status: 'Planning'
      }
    ]
  });
});

app.get('/download/apk', (req, res) => {
  // In a real scenario, you would serve the actual APK file
  // For now, we'll just send information about the download
  res.json({
    message: 'APK download initiated',
    filename: 'snooze-app.apk',
    version: '1.0.0',
    size: '25.4 MB',
    instructions: 'Enable "Install from unknown sources" in your device settings before installing.',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/creator-application', (req, res) => {
  const { name, email, portfolio, social_handles, content_type } = req.body;

  // Here you would typically save to database or send email
  console.log('Creator application received:', { name, email, portfolio, social_handles, content_type });

  res.json({
    success: true,
    message: 'Thank you for your interest! We\'ll review your application and get back to you soon.',
    application_id: 'SNOOZE-' + Date.now(),
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, subject, message });

  res.json({
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Open http://localhost:${PORT} to view your app`);
  console.log(`🎨 Open http://localhost:${PORT}/portfolio to view the animated portfolio`);
  console.log(`🌟 Open http://localhost:${PORT}/snooze to view the Snooze landing page`);
});

module.exports = app;
