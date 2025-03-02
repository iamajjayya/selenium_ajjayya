from selenium import webdriver
from selenium.webdriver.common.by import By
import requests

url = "https://jqueryui.com/"
driver = webdriver.Chrome()

driver.maximize_window()

#open the  url
driver.get(url)
all_links = driver.find_elements(By.TAG_NAME,"a")
print(f"Total number of Links on the  page: {len(all_links)}")


for link in all_links:
    href = link.get_attribute('href')
    response = requests.get(href)
    if response.status_code >= 400:
        print(f"Broken link: {href} (Status code: {response.status_code})")


driver.quit()    




