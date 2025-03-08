

from selenium import webdriver
from selenium.webdriver.common.by import By
import time


driver =  webdriver.Chrome()
url ="https://the-internet.herokuapp.com/javascript_alerts"
driver.get(url)
driver.maximize_window()
time.sleep(2)
confirmtion_alert =  driver.find_element(By.CSS_SELECTOR,"#content > div > ul > li:nth-child(2) > button").click()
time.sleep(2)
alert = driver.switch_to.alert
print("Confirmation Alert", alert.text)
time.sleep(2)
#dismiss the alert (click cancel)
alert.dismiss()
time.sleep(2)
#verify the result

result =  driver.find_element(By.ID,"result").text
print("Result after dismissing Alert",  result)

time.sleep(5)

driver.quit()