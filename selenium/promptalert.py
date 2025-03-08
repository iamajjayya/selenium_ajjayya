from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
url = "https://the-internet.herokuapp.com/javascript_alerts"
driver.get(url)
driver.maximize_window()

prompt_alert = driver.find_element(By.CSS_SELECTOR,"#content > div > ul > li:nth-child(3) > button").click()
time.sleep(2)

alert =  driver.switch_to.alert
alert.send_keys("Hello Im Ajjayya")
alert.accept()

result  = driver.find_element(By.ID,"result").text
print("The prompt messege", result)
time.sleep(2)

driver.quit()


