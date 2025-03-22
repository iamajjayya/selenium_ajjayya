from selenium import webdriver
from selenium.webdriver.common.by import By
import csv
import time

csv_file  = "testdata1.csv"

test_data = []

with open (csv_file,'r') as file:
    reader  = csv.DictReader(file)

    for row in reader:
        test_data.append(row)
driver = webdriver.Chrome()
driver.maximize_window()

for data in test_data:
    username =  data["username"]
    password =  data["password"]

    driver.get("https://www.saucedemo.com/")
    time.sleep(2)

    #fill login form
    driver.find_element(By.ID, "user-name").clear()
    driver.find_element(By.ID, "user-name").send_keys(username)
    driver.find_element(By.ID, "password").clear()
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.ID, "login-button").click()
    time.sleep(2)

    try:
        # If login is successful, menu button appears
        driver.find_element(By.ID, "react-burger-menu-btn").click()
        time.sleep(1)
        driver.find_element(By.ID, "logout_sidebar_link").click()
        print(f"[PASS] Login successful for user: {username}")
    except:
        print(f"[FAIL] Login failed for user: {username}")

    time.sleep(2)

driver.quit()
    