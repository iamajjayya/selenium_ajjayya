'''
Its a method in Chromeoptions that lets you set expiremental settings for chrome
mainly for:

-> Prefrerences (like download settings)
-> Disabling automation banners
-> Handling SSL certificates
-> customizing browser behaviour deeply 



Syntax 

options.add_experimental_options("keys",value)
key :  the setting name(" prefs","excludeswitches")
value : the  value (usually a dict or list)

'''

from selenium import webdriver
from selenium.webdriver.chrome.options import Options


Options = Options()

prefs = {
    "download.default_directory":"/tmp",
    "download.prompt_for_download":False,
    "safebrowsing.enabled":True
}

Options.add_experimental_option("prefs",prefs)

Options.add_experimental_option("excludeSwitches",["enable-automation"])
Options.add_experimental_option("useAutomationExtension", False)

driver  =  webdriver.Chrome(options=Options)
driver.get("https://sanook.com")
driver.save_screenshot("sanook1.png")
driver.quit()