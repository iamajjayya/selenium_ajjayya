from selenium import webdriver
import time

driver  = webdriver.Chrome()

viewport  = [(1024,768),(768,1024),(375,667),(414,896)]

driver.get('https://www.google.com/')


try:
    for width,height in viewport:
        driver.set_window_size(width,height)
        time.sleep(5)
finally:
    driver.close()        

time.sleep(5)
