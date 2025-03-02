# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import Select
# import time


# driver =  webdriver.Chrome()
# driver.maximize_window()

# login_url  = "https://the-internet.herokuapp.com/dropdown"
# driver.get(login_url)

# dropdown_element  = driver.find_element(By.ID,"dropdown")
# select = Select(dropdown_element)
# target_value ="Option 3"

# for option in select.options:
#     if option.text == target_value:
#         option.click()
#         print(f"Selected option is {target_value}")
#         break
#     else:
#         print(f"Option {target_value}' not found")















# # select = Select(dropdown_element)




# # option_count  = len(select.options)



# # expected_count  = 3

# # if option_count == expected_count:
# #     print("Test case passed, Count is correct")
# # else:
# #     print("Test case failed, Count is Incorrect")


    











# # # select the value by the visible text
# # #  select the value by the index
# # # select the option by using a value 

# # # select.select_by_visible_text("Option 2")

# # # select.select_by_index(1)
# # # select.select_by_value("2")
# # time.sleep(5)

# #how to interact with  dropdown
# #how to use select class 
# #how to use 3 different methods
# #select by visible texts
# #select by value
# #slect by Index
# #how to count the dropdown values
# #loop the dropdown values and if the desired values found selec the vallue 


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

#initilize webdriver

driver = webdriver.Chrome()
driver.maximize_window()



#open url
login_url = "https://the-internet.herokuapp.com/dropdown"
driver.get(login_url)

#locate dorpdown and initilize select class
dropdown_element =  driver.find_element(By.ID,"dropdown")
select  = Select(dropdown_element)

#define target value
target_value ="Option 2"

select.select_by_visible_text(target_value)
print(f"Selected option is : {target_value}")


# verify selection 

selected_option  = select.first_selected_option.text
if selected_option ==  target_value:
    print("Test case passed :  Correct option Selected")
else:
    print("Test case failed: Incorrect Selected")

#count the number of  option 

option_count =  len(selected_option)
print(option_count)
excpeted_count = 3

if option_count == excpeted_count:
    print("Test case  passed: Count is correct")
else:
     print("Test case Failed:  Count is incorrect")

import time

time.sleep(3)
driver.quit()
