from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
url = "https://the-internet.herokuapp.com/broken_images"
driver.maximize_window()
driver.get(url)

images = driver.find_elements(By.TAG_NAME, "img")

broken_images = []

for image in images:
    if driver.execute_script("return arguments[0].naturalWidth", image) == 0:
        broken_images.append(image.get_attribute('src'))

if broken_images:
    print("Broken images found:")
    for src in broken_images:
        print(src)
else:
    print("No broken images found.")

driver.quit()
