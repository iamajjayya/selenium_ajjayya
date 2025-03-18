from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from selenium.webdriver.common.action_chains import ActionChains
browser = webdriver.Chrome()
browser.maximize_window()
url ="https://demo.automationtesting.in/Resizable.html"
browser.get(url)

wait = WebDriverWait(browser, 10)
resizable_element = wait.until(EC.presence_of_element_located(
    (By.XPATH, "//div[@class='ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se']")
))
Intital_element_size = browser.find_element(By.XPATH,"//div[@id='resizable']")
Initial_size = Intital_element_size.size
print("Initial Size :", Initial_size)
time.sleep(5)
action_chains  = ActionChains(browser)
action_chains.click_and_hold(resizable_element).move_by_offset(100,100).release().perform()
time.sleep(5)
resized_element = Intital_element_size.size
print("Resized Element :" , resized_element)
time.sleep(5)
browser.quit()
