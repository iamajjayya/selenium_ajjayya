from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys

from selenium.webdriver.common.by import By

browser =  webdriver.Chrome()
browser.get('https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407')
browser.maximize_window()
browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
checkboxes =  browser.find_elements(By.XPATH,"//input[@type='checkbox']")
for checkbox in checkboxes:
    checkbox.send_keys(Keys.SPACE)
time.sleep(5)
   
checked_count  = 0
for checbox in checkboxes:
    if checkbox.is_selected():
       checked_count += 1
       
print(checked_count)
expected_checked_count = 7



assert checked_count == expected_checked_count, f"checkbox count mismatch: Expected {expected_checked_count} , but got {checked_count}"


time.sleep(5)
browser.close()        






