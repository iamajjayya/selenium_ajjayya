from selenium import webdriver
from selenium.webdriver.common.by import By
import requests

driver =  webdriver.Chrome()
url = "https://the-internet.herokuapp.com/broken_images"
driver.maximize_window()
driver.get(url)

images = driver.find_elements(By.TAG_NAME,"img")


broken_images  = []

for  image in images:
    src  = image.get_attribute('src')
    if src:
        response =  requests.get(src)
        if response.status_code != 200:
            broken_images.append(src)
            print(f"Broken Image found")

if broken_images:
    print("List of Broken Images: ")
    for broken_image in broken_images:
        print(broken_image)
else:
     print("No broken Images found")


driver.quit()             

        


