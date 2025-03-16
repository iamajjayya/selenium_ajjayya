from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time
browser = webdriver.Chrome()
browser.maximize_window()
browser.get('https://the-internet.herokuapp.com/drag_and_drop')
sourece_element =  browser.find_element(By.ID,"column-a")
destination_element = browser.find_element(By.ID,"column-b")

actions  = ActionChains(browser)
time.sleep(2)
actions.drag_and_drop(sourece_element,destination_element).perform()
time.sleep(5)
actions.drag_and_drop(sourece_element,destination_element).perform()
time.sleep(1)
browser.quit()