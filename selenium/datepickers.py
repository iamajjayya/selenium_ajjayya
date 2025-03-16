'''
https://www.globalsqa.com/demo-site/datepicker
'''


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
from datetime import datetime , timedelta

browser = webdriver.Chrome()
browser.maximize_window()

url ="https://www.globalsqa.com/demo-site/datepicker"
browser.get(url)

browser.find_element(By.CSS_SELECTOR,"#post-2661 > div.twelve.columns > div > div > div.single_tab_div.resp-tab-content.resp-tab-content-active > div > a").click()

framelo = browser.find_element(By.CSS_SELECTOR,"#post-2661 > div.twelve.columns > div > div > div.single_tab_div.resp-tab-content.resp-tab-content-active > p > iframe")
browser.switch_to.frame(framelo)
time.sleep(5)
browser.find_element(By.CSS_SELECTOR,"#datepicker").click()
current_time  =  datetime.now()
next_date =  current_time + timedelta(days=1)

formatted_date = next_date.strftime("%m/%d/%y")
browser.find_element(By.CSS_SELECTOR,"#datepicker").send_keys(formatted_date + Keys.TAB )
time.sleep(5)
browser.quit()



