'''
Iframe(Inline Frame) is an HTML element that embeds another documents inside the current webpage, 
many websites use Iframes to load Advertisements, third party widgets, or embedded videos


Steps to Interact with reCAPTCHA Checkbox
Find the iFrame that contains the CAPTCHA.
Switch into the iFrame.
Click the CAPTCHA checkbox.
Switch back to the main page.


'''

from selenium import webdriver

from selenium.webdriver.common.by import By

import time


driver =  webdriver.Chrome()
driver.get("https://www.google.com/recaptcha/api2/demo")


#wait for the page  to load
time.sleep(3)

#locate the reCaptch iframe
captcha_iframe  =  driver.find_element(By.TAG_NAME, "iframe")

#switch to the recaptcha Iframe
driver.switch_to.frame(captcha_iframe)

#click the captcha checkbox

capthc_checkbox = driver.find_element(By.CSS_SELECTOR,"#recaptcha-anchor").click()


#switch back to the main page
driver.switch_to.default_content()


time.sleep(5)

driver.quit()

