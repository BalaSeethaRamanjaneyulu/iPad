# iPad 2 Smart Home Hub 🏠

A premium, glassmorphic web-based Smart Home Hub designed to revitalize the **iPad 2 (A1395)** running iOS 9.3.5.

## ✨ Features

- **🛠️ Hardware Diagnostics**: Test all sensors (Accelerometer, Gyroscope, Compass) and camera directly from Safari
- **🕒 Premium Clock**: Beautiful digital clock with glassmorphic design
- **🌤️ Weather Dashboard**: Glanceable weather information
- **🌐 Browser-in-Browser**: Load external websites within the Hub interface
- **🎨 Modern Design**: Glassmorphism effects optimized for the A5 chip

## 📱 Compatibility

- **Device**: iPad 2 (Model A1395 - Wi-Fi only)
- **OS**: iOS 9.3.5
- **Browser**: Mobile Safari (WebKit)
- **Technology**: Vanilla HTML5, CSS3, ES5 JavaScript

## 🚀 Getting Started

### Prerequisites
- iPad 2 with iOS 9.3.5
- Mac/PC on the same Wi-Fi network
- Python 3 (or any HTTP server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BalaSeethaRamanjaneyulu/iPad.git
   cd iPad
   ```

2. **Start a local web server**
   ```bash
   python3 -m http.server 8000
   ```

3. **Access from iPad**
   - Open Safari on your iPad 2
   - Navigate to `http://[YOUR-MAC-IP]:8000`
   - Example: `http://192.168.1.100:8000`

4. **Add to Home Screen** (Optional)
   - Tap the Share icon in Safari
   - Select "Add to Home Screen"
   - Launch as a full-screen standalone app

## 📂 Project Structure

```
iPad/
├── index.html          # Main Hub shell
├── style.css           # Design system
├── app.js              # Navigation logic
├── apps/
│   ├── diagnostics.html  # Hardware testing
│   ├── clock.html        # Digital clock
│   ├── weather.html      # Weather dashboard
│   └── browser.html      # Web browser
├── data.md             # Hardware specifications
└── Specs.md            # Technical details
```

## 🎯 Usage

### Diagnostics Page
- **Sensors**: Real-time accelerometer, gyroscope, and compass readings
- **Camera**: Snapshot-based camera test (iOS 9 fallback)
- **Screen**: Color cycle test for dead pixels

### Browser Module
- Navigate to any website using the built-in URL bar
- Loads content in an iframe for seamless integration

## 🔧 Technical Details

Built with legacy browser compatibility in mind:
- ES5 JavaScript (no modern syntax)
- `-webkit` prefixed CSS properties
- Flexbox layouts with fallbacks
- No external dependencies

## 📊 Hardware Specs

- **SoC**: Apple A5 (Dual-core 1.0 GHz)
- **RAM**: 512 MB
- **Display**: 9.7" IPS LCD (1024×768)
- **Sensors**: 3-axis accelerometer, gyroscope, compass, ambient light
- **Cameras**: 0.7MP rear, VGA front

## 📝 License

MIT License - Feel free to use and modify!

## 🙏 Acknowledgments

Built to breathe new life into vintage Apple hardware. Every device deserves a second chance! ♻️

---

**Created with ❤️ for the iPad 2 community**
