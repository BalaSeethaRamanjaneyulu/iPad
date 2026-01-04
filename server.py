import psutil
from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import os

app = Flask(__name__)
CORS(app) # Enable CORS for iPad-to-Mac communication

def run_applescript(script):
    try:
        subprocess.run(['osascript', '-e', script], check=True)
        return True
    except:
        return False

@app.route('/stats')
def get_stats():
    battery = psutil.sensors_battery()
    stats = {
        'cpu': psutil.cpu_percent(interval=None),
        'ram': psutil.virtual_memory().percent,
        'battery': battery.percent if battery else "N/A",
        'power': battery.power_plugged if battery else "N/A"
    }
    return jsonify(stats)

@app.route('/media/<action>')
def media_control(action):
    # Try controlling Music app first, then fallback to system media
    scripts = {
        'playpause': 'tell application "System Events" to key code 49', # Spacebar
        'next': 'tell application "System Events" to key code 124 using {command down}', # Mocking media keys
        'prev': 'tell application "System Events" to key code 123 using {command down}'
    }
    
    # Accurate media control via AppleScript for Music app
    target_scripts = {
        'playpause': 'tell application "Music" to playpause',
        'next': 'tell application "Music" to next track',
        'prev': 'tell application "Music" to previous track'
    }
    
    if action in target_scripts:
        run_applescript(target_scripts[action])
        return jsonify({'status': 'ok'})
    return jsonify({'status': 'error'}), 400

@app.route('/launch/<app_name>')
def launch_app(app_name):
    apps = {
        'safari': 'Safari',
        'music': 'Music',
        'terminal': 'Terminal',
        'finder': 'Finder'
    }
    if app_name in apps:
        subprocess.run(['open', '-a', apps[app_name]])
        return jsonify({'status': 'ok'})
    return jsonify({'status': 'error'}), 400

if __name__ == '__main__':
    # Get local IP for convenience
    import socket
    hostname = socket.gethostname()
    local_ip = socket.gethostbyname(hostname)
    print(f"\n🚀 Mac Companion Server running!")
    print(f"🔗 Connect your iPad to: http://{local_ip}:5001")
    print("-------------------------------------------\n")
    
    app.run(host='0.0.0.0', port=5001, debug=False)
