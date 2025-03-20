from selenium import webdriver
from selenium.webdriver.chrome.options import Options

user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " \
             "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

options = Options()
options.add_argument(f"user-agent={user_agent}")  # Set custom user-agent

driver = webdriver.Chrome(options=options)
driver.get("https://www.whatismybrowser.com/")  # You can verify your user-agent here

driver.quit()
