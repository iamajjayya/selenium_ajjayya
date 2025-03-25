'''
Chromeoptions?

In selenium, chromeoption is a class used to customise and configure the behaviour of the chrome browser before launching it

you can think of its as a setting manager that lets you

->  Run chrome in headless mode 
-> disable extensions
-> set browser preference (like download directory)
-> launch with specific arguments (inconginto , full screen)
-> set proxy settings
-> handle SSL certificate
-> set user - agants 






'''

'''
Basic setup :




'''

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options  = Options() # create an instance
#options.add_argument("--start-maximized") #start maximized
#options.add_argument("--incognito") #incongito mode

#options.add_argument("--disable-extensions")
#options.add_argument("--disable-popup-blocking")


#headless mode (run browser in background without gui)

options.add_argument("--headless")
#or options.headless = true
options.add_argument("--disable-gpu")

driver = webdriver.Chrome(options=options)
driver.get("https://www.91pu.com.tw/singer/")



driver.quit()
