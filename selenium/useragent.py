from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Step 1: Set a User-Agent string (pretend to be Chrome on Windows)
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0"

# Step 2: Add it to Chrome options
options = Options()
options.add_argument(f"user-agent={user_agent}")
options.add_experimental_option("excludeSwitches",["enable-automation"])
options.add_experimental_option("useAutomationExtension", False)

# Step 3: Launch Chrome with that User-Agent
driver = webdriver.Chrome(options=options)

# Step 4: Open a site that shows your User-Agent
driver.get("https://www.whatismybrowser.com/")

# Step 5: Quit browser
driver.quit()
