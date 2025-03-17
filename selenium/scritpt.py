import pyautogui
import time

time.sleep(5)  # Gives you 5 seconds to switch to your sheet

while True:
    pyautogui.press('a')  # Presses 'A' key
    print("Pressed 'A' on the sheet")  # Logs the action
    time.sleep(30)  # Repeats every 30 seconds
    