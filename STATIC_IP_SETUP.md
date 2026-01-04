# Mac Static IP Setup Guide

Follow these steps to make your Mac always use `192.168.0.7`:

## Method 1: System Settings (Easy)

1. **Open System Settings** on your Mac
2. Go to **Network**
3. Select your **Wi-Fi** connection
4. Click **Details...**
5. Go to the **TCP/IP** tab
6. Change **Configure IPv4** from "Using DHCP" to **"Using DHCP with manual address"**
7. Set **IPv4 Address** to: `192.168.0.7`
8. Click **OK**
9. Click **Apply**

## Method 2: Terminal Command (Quick)

Run this command to set a static IP:
```bash
networksetup -setmanual "Wi-Fi" 192.168.0.7 255.255.255.0 192.168.0.1
```

To verify:
```bash
ipconfig getifaddr en0
```

It should always show: `192.168.0.7`

---

## ✅ After Setting Static IP:

Your iPad will ALWAYS use:
- **URL**: `http://192.168.0.7:5001`
- No more changing IPs!
- Just tap the home screen icon and it works forever!

## 📱 Add to Home Screen (One-time setup):

Once you open `http://192.168.0.7:5001` on your iPad:
1. Tap the **Share** button in Safari
2. Select **"Add to Home Screen"**
3. Name it: "iPad Hub"
4. Now you have a permanent app icon that always works!

---

**This is the permanent solution!** 🎉
