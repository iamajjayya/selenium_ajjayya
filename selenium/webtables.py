from selenium import webdriver
from selenium.webdriver.common.by import By
import time

browser =  webdriver.Chrome()
url = "https://cosmocode.io/automation-practice-webtable/"
browser.get(url)
browser.maximize_window()
browser.execute_script("window.scrollTo(0,700)")
time.sleep(5)

table =  browser.find_element(By.ID,"countries")
rows =  table.find_elements(By.TAG_NAME,"tr")
rows_count = len(rows) 
print(rows_count)
target_value  = "India"
found  =  False
for row in rows:
    cells = row.find_elements(By.TAG_NAME,"td")
    for cell in cells:
        if target_value in cell.text:
            print(f"Found value{target_value}")
            found = True
            break
    if found:

        break
if not found:
    print(f"Target Value {target_value} not found ")        

