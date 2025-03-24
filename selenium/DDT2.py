import json
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

with open("testdata.json") as f:
    data =  json.load(f)


driver =  webdriver.Chrome()

for user in data['users']:
    username = user['username']
    password = user['password']

    driver.get("https://www.saucedemo.com/")

    driver.find_element(By.ID, "user-name").send_keys(username)
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.ID, "login-button").click()

    driver.find_element(By.ID, "react-burger-menu-btn").click()
    time.sleep(5)
    driver.find_element(By.ID, "logout_sidebar_link").click()

driver.quit()
