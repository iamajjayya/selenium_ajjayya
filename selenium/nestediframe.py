'''
Steps to Handle Nested Iframes in Selenium 

1, Switch to the first(parent) Iframe
2, Switch to the second (nested) iframe inside the first Iframe
3, Perform operations inside the nested Iframe 
4, Switch back to the parent frame or main document


https://the-internet.herokuapp.com/nested_frames

'''

from selenium import webdriver
from selenium.webdriver.common.by import By



driver =  webdriver.Chrome()
driver.maximize_window()

url = "https://the-internet.herokuapp.com/nested_frames"
driver.get(url)

#switching to top frame

driver.switch_to.frame("frame-top")

#switching to top frame (middle)
driver.switch_to.frame("frame-middle")

content  =  driver.find_element(By.ID,"content").text
print("Content in Middke frame : ", content)

#switch to default content
driver.switch_to.default_content()

#switch to frame bottom

driver.switch_to.frame("frame-bottom")

bottom_content = driver.find_element(By.TAG_NAME,"body").text

print("BODY FRAME text :", bottom_content)






