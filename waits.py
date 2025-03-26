from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
#step 1: open the browser
driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

#implicit wait
#Implicitly_wait for elemets to appear (applies to all elements)
driver.implicitly_wait(10) # Waits up to 10 sec for element to load 


username_field = driver.find_element(By.ID,"user-name").send_keys("standard_user")
password_filed = driver.find_element(By.ID,"password").send_keys("secret_sauce")


#Explicit wait

wait  =  WebDriverWait(driver,15) #maximum wait of 15 seconds
loginButton  = wait.until(EC.element_to_be_clickable((By.ID,"login-button"))).click()


#fluent wait

fluent_wait  = WebDriverWait(driver,20,poll_frequency=2)

try:
    product_label  =  fluent_wait.until(EC.visibility_of_element_located((By.CLASS_NAME,"title")))
    print("Product Page Loaded",product_label.text)
except TimeoutException:
    print(" Product Page did not load in time")    

driver.quit() # close the browser