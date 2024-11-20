# 📱 Telegram Mini App - Form Data Handler

A lightweight, vanilla JavaScript implementation of a Telegram Mini App (TMA) that seamlessly handles form data submission to Telegram bots.

## 🌟 Features

- Pure JavaScript implementation - no frameworks required
- Seamless integration with Telegram Mini App platform
- Simple and efficient form data handling
- Direct communication with Telegram bots
- Responsive and user-friendly interface

## 🚀 Quick Start

1. Clone the repository:
```
git clone https://github.com/porameht/telegram-ton-miniapp.git
```

### Prerequisites

- Telegram Bot Token
- Basic knowledge of Telegram Mini Apps
- Web server for hosting

## 📋 Setup

1. Configure your Telegram Bot:
   - Create a bot via [@BotFather](https://t.me/botfather)
   - Get your bot token
   - Set up your Mini App

2. Update configuration:
   - Open `config.js`
   - Add your bot token and other required parameters

3. Deploy to your web server

## 💻 Usage

```javascript
// Initialize Telegram Mini App
const tg = window.Telegram.WebApp;
// Handle form submission
form.addEventListener('submit', async (e) => {
e.preventDefault();
const formData = new FormData(form);
// Send to Telegram bot
await sendToBot(formData);
});
```


## 🔧 Configuration

Configure your application by modifying the following parameters:

```javascript
const config = {
botToken: 'YOUR_BOT_TOKEN',
// Add other configuration options
};
```

## 📚 Documentation

For detailed information about Telegram Mini Apps:
- [Official Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Telegram Team for the Mini Apps platform
- Contributors and supporters

---

Made with ❤️ by fr4nk
