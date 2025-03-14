'''
Alerts

* Javascript alerts are pop ups that appear in the browser,  They are created using the alert(),
confirm(), and prompt() methods in javascript, these pops block user interaction untill they are handled.


Three types of alerts:

1, Simple Alert :  A basic pop -up with only an "OK" Button 
2, Confirmation Alert: A pop up with both Ok and Cancel butons
3, Prompt Alert :  A pop up with input field, Along with "ok" and cancel buttons




'''



from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

url ="https://the-internet.herokuapp.com/javascript_alerts"
driver.get(url)
driver.maximize_window()

time.sleep(2)



# Handling Simple Alert (Ok Button Only)
'''
Steps:
1, Click the "Click for JS alert" Button
2, Switch to the alert
3, Retrives the alert text
4, Accept (clese the alert)


'''
simple_alert =  driver.find_element(By.CSS_SELECTOR,"#content > div > ul > li:nth-child(1) > button").click()


#switch to the alert

alert =  driver.switch_to.alert

#Print the alert message 

print("Simple alert message:", alert.text)


#Accept the Alert (click ok)
alert.accept()


#verify result

result  = driver.find_element(By.ID,"result").text
expected_result = "You successfully clicked an alert"

if result == expected_result:
    print(" Simple pop alert is working fine")
else:
    print("Simple pop up its not working")    

time.sleep(5)

driver.quit()

