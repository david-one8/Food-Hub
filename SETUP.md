# Food Hub - Project Setup Guide

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/david-one8/Food-Hub.git
   cd Food-Hub
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   cp ../.env.example .env
   # Edit .env with your configuration
   npm start
   ```

3. **Environment Setup**
   - Copy `.env.example` to `Backend/.env`
   - Update the environment variables with your values
   - Ensure MongoDB is running

## Project Features

### Current Implementation
- ✅ User Authentication (Register/Login)
- ✅ Food Partner Authentication
- ✅ JWT Token Management
- ✅ MongoDB Integration
- ✅ Express.js API Structure
- ✅ Password Encryption
- ✅ Input Validation

### Planned Features
- 🔄 Menu Management
- 🔄 Order Processing
- 🔄 Payment Integration
- 🔄 Real-time Notifications
- 🔄 Frontend Application
- 🔄 Admin Dashboard

## Development Status

This project is currently in **active development**. The backend API foundation is complete with authentication functionality. Frontend development and additional features are planned for future releases.

## Contributing

We welcome contributions! Please read our contributing guidelines and feel free to submit pull requests.

## Support

For questions and support, please open an issue in the GitHub repository.
