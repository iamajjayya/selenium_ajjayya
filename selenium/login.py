from selenium import  webdriver

from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.maximize_window()

username = "standard_user"
password = "secret_sauce"
login_url = "https://www.saucedemo.com/v1/"
driver.get(login_url)

username_filed = driver.find_element(By.ID,"user-name")
password_filed = driver.find_element(By.ID,"password")

username_filed.send_keys(username)
password_filed.send_keys(password)


login_button  = driver.find_element(By.ID,"login-button")
assert not login_button.get_attribute("disabled")
login_button.click()


sucess_element  = driver.find_element(By.CSS_SELECTOR,"#inventory_filter_container > div")
assert sucess_element.text == "Products"


