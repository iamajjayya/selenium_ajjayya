from selenium import webdriver
from selenium.webdriver.common.by import By
import time


driver = webdriver.Chrome()
selenuim_site = "https://www.selenium.dev/"
driver.get(selenuim_site)

driver.switch_to.new_window()
driver.get("https://playwright.dev/")
number_of_tabs =  len(driver.window_handles)
print(number_of_tabs)
tabs_value = driver.window_handles
print(tabs_value)
current_tab = driver.current_window_handle
print(current_tab)

time.sleep(5)
driver.find_element(By.CSS_SELECTOR,"#__docusaurus_skipToContent_fallback > header > div > div > a").click()
first_tab  = driver.window_handles[0]
if current_tab != first_tab:
    driver.switch_to.window(first_tab)
time.sleep(5)
driver.find_element(By.CSS_SELECTOR,"#main_navbar > ul > li:nth-child(2) > a").click()

time.sleep(5)