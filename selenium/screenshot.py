import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors')
options.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = webdriver.Chrome(options=options)
driver.get("https://www.ndtv.com/world?adliveplustest=1")
driver.maximize_window()

# Pause to let you open DevTools manually (F12), then auto-screenshot
time.sleep(10)  # 10 seconds to open DevTools manually

screenshot_path = "ndtv21.png"
if driver.save_screenshot(screenshot_path):
    print(f"Screenshot saved as {screenshot_path}")
else:
    print("Failed to save screenshot.")

driver.quit()
