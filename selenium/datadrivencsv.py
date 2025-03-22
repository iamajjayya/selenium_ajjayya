from selenium import webdriver
import csv
import time
from selenium.webdriver.common.by import By

csv_file =  "testdata1.csv"
test_data = []


with open(csv_file,'r') as file:
    reader  =  csv.DictReader(file)

    for row in reader:
        test_data.append(row)

print(test_data)    

for data in test_data:
    driver  = webdriver.Chrome()
    driver.maximize_window()
    driver.get("https://www.saucedemo.com/")
    time.sleep(5)
    driver.find_element(By.ID,"user-name").send_keys(data['username'])
    driver.find_element(By.ID,"password").send_keys(data['password'])
    driver.find_element(By.ID,"login-button").click()

    driver.find_element(By.XPATH,"//button[@id='react-burger-menu-btn']").click()
    time.sleep(5)
    driver.find_element(By.XPATH,"//a[@id='logout_sidebar_link']").click()

driver.quit()