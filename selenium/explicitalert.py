from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoAlertPresentException

driver  =  webdriver.Chrome()

driver.get("https://the-internet.herokuapp.com/javascript_alerts")
driver.maximize_window()

#Function to handle alerts with explicit wait

def handle_alert(wait_time=5,action="accept", input_text=None):
    try:
        #wait for alert  to be present
        WebDriverWait(driver,wait_time).until(EC.alert_is_present())
        
        #switch to alert
        alert  = driver.switch_to.alert

        #print alert text
        print("Alert Text", alert.text)
        
        #if input_text is provided, enter  it in the prompt alert
        if input_text:
            alert.send_keys(input_text)

        #Accept or dismiss based on action parameter
        if action == "accept":
            alert.accept()
        else:
            alert.dismiss()

    except NoAlertPresentException:
        print("No Alert found!")

print("\n Handling Simple Alert....")   
driver.find_element(By.CSS_SELECTOR,"#content > div > ul > li:nth-child(3) > button").click()
handle_alert()                     

