from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from datetime import datetime, timedelta
import time

browser = webdriver.Chrome()
browser.maximize_window()
url = "https://demo.automationtesting.in/Datepicker.html"
browser.get(url)
browser.find_element(By.ID, "datepicker2").click()
time.sleep(2)

current_date = datetime.now()
print("Current Date:", current_date)

next_day = current_date + timedelta(days=1)
print("Next Day:", next_day)
Next_day = str(next_day.day)
print("Day to select:", Next_day)

current_month = current_date.month
current_year = current_date.year

# Calculate next month and year
if current_month == 12:
    next_month = 1
    next_year = current_year + 1
else:
    next_month = current_month + 1
    next_year = current_year

print(f"Next Month: {next_month}, Next Year: {next_year}")

# Select month
Month_Dropdown = browser.find_element(By.CSS_SELECTOR, "select[title='Change the month']")
select_month = Select(Month_Dropdown)
select_month.select_by_index(next_month - 1)  # index starts from 0

# Select year
year_dropdown = browser.find_element(By.CSS_SELECTOR, "select[title='Change the year']")
select_year = Select(year_dropdown)
select_year.select_by_visible_text(str(next_year))

# Select day
browser.find_element(By.LINK_TEXT, Next_day).click()

time.sleep(5)
browser.quit()
