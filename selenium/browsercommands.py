#Browser commands

from selenium import  webdriver
import time
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
url = "https://opensource-demo.orangehrmlive.com/"
driver.get(url)
driver.maximize_window()
time.sleep(5)
driver.find_element(By.CSS_SELECTOR,"#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p").click()
time.sleep(5)
driver.back()
time.sleep(5)
driver.forward()
time.sleep(5)
driver.refresh()
time.sleep(10)
driver.close()
driver.quit()