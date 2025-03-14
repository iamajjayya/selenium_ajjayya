from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode
chrome_options.add_argument("--window-size=1920,1080")

# Path to your ChromeDriver
chrome_driver_path = "/path/to/chromedriver"

# URL to visit
url = "https://www.ndtv.com/india-news/26-11-accused-tahawwur-ranas-extradition-request-rejected-by-us-court-7866809?rtbpbjs_debug=true&adliveplustest=1"

# Initialize WebDriver
service = Service(chrome_driver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

# Visit the URL
driver.get(url)

# Give some time for the page to load fully
time.sleep(5)

# Target the div element by its ID
div_id = "google_ads_iframe_/23135388084/961867-728-90-1_0__container__"
ad_div = driver.find_element(By.ID, div_id)

# Check the size of the ad unit
expected_width = 728
expected_height = 90
ad_width = ad_div.size['width']
ad_height = ad_div.size['height']

if ad_width != expected_width or ad_height != expected_height:
    # Take a screenshot if the ad unit size is different
    driver.save_screenshot("ad_unit_different_size.png")
    print("Screenshot taken: ad_unit_different_size.png")
else:
    print("Ad unit size is as expected.")

# Check the bidder name (example of extracting text or attributes)
bidder_name = ad_div.get_attribute('data-bidder-name')
print(f"Bidder Name: {bidder_name}")

# Close the browser
driver.quit()
