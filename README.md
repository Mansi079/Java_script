# JavaScript Development Environment

A complete JavaScript development workspace configured for GitHub Codespaces with Node.js, Express.js, and modern development tools.

## 🚀 Features

- **Node.js 20** - Latest LTS version with npm
- **Express.js** - Fast, unopinionated web framework
- **ESLint** - Code linting with modern JavaScript rules
- **Prettier** - Automatic code formatting
- **Jest** - JavaScript testing framework
- **Nodemon** - Development server with auto-restart
- **Live Server** - Static file server for frontend development
- **VS Code Extensions** - Pre-configured with essential extensions

## 📁 Project Structure

```
├── .devcontainer/
│   └── devcontainer.json      # Codespaces configuration
├── .vscode/
│   ├── settings.json          # VS Code workspace settings
│   └── extensions.json        # Recommended extensions
├── public/
│   └── index.html             # Frontend demo page
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .gitignore                 # Git ignore rules
├── index.js                   # Main server file
├── package.json               # Node.js dependencies
└── README.md                  # This file
```

## 🛠️ Getting Started

### Using GitHub Codespaces

1. **Open in Codespaces**: Click the green "Code" button → "Create codespace on main"
2. **Wait for setup**: Codespaces will automatically install dependencies
3. **Start developing**: All tools are pre-configured and ready to use

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Serve static files
npm run serve
```

## 🌐 Available Scripts

- `npm start` - Start the Express server
- `npm run dev` - Start with nodemon for development
- `npm test` - Run Jest tests
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run serve` - Serve static files with Live Server

## 🔧 Configuration

### ESLint
The project uses ESLint with modern JavaScript rules. Configuration is in `eslint.config.js`.

### Prettier
Code formatting is handled by Prettier. Configuration is in `.prettierrc`.

### VS Code
Workspace settings are in `.vscode/settings.json` with automatic formatting and linting on save.

## 🚀 Deployment

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name

# Deploy
git push heroku main
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 🧪 Testing

Tests are configured with Jest. Create test files with `.test.js` or `.spec.js` extensions.

Example test:
```javascript
// math.test.js
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## 📝 API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

## 🔄 Development Workflow

1. **Code** - Write your JavaScript/Node.js code
2. **Test** - Run `npm test` to verify functionality
3. **Lint** - Use `npm run lint` to check code quality
4. **Format** - Run `npm run format` to format code
5. **Commit** - Git commit with clear messages
6. **Deploy** - Push to your preferred platform

## 📚 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Jest Testing Framework](https://jestjs.io/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🎉**