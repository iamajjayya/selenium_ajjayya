from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import os

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--window-size=1920,1080")

# Path to your ChromeDriver
chrome_driver_path = "/path/to/chromedriver"

# Initialize the WebDriver
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# URL of the page containing the ad
url = "https://www.ndtv.com/world?adliveplustest=1"

# Open the URL
driver.get(url)

# Wait for the page to load completely
time.sleep(10)  # Adjust the sleep time as needed

# Capture a screenshot of the page
screenshot_path = "ad_screenshot.png"
driver.save_screenshot(screenshot_path)
print(f"Screenshot saved to {screenshot_path}")

# Get the page source and parse it with BeautifulSoup
page_source = driver.page_source
soup = BeautifulSoup(page_source, 'html.parser')

# Find the ad element by its div id
ad_div = soup.find('div', id='andbeyond7281')

if ad_div:
    print("Ad found with id 'andbeyond7281'")
    
    # Extract the click URL from the ad's anchor tag
    ad_link = ad_div.find('a', id='aw0')
    if ad_link:
        click_url = ad_link.get('href')
        print(f"Click URL: {click_url}")
        
        # Open the click URL in a new tab
        driver.execute_script(f"window.open('{click_url}', '_blank');")
        time.sleep(5)  # Wait for the new tab to load
        
        # Switch to the new tab and capture a screenshot
        driver.switch_to.window(driver.window_handles[1])
        click_screenshot_path = "click_screenshot.png"
        driver.save_screenshot(click_screenshot_path)
        print(f"Click URL screenshot saved to {click_screenshot_path}")
        
        # Close the new tab and switch back to the original tab
        driver.close()
        driver.switch_to.window(driver.window_handles[0])
    else:
        print("No click URL found in the ad.")
else:
    print("Ad with id 'andbeyond7281' not found.")

# Close the browser
driver.quit()