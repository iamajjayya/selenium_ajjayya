from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

def get_driver():
    """Setup and return a Selenium WebDriver instance."""
    options = Options()
    options.add_argument("--headless")  # Run in the background
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--window-size=1920,1080")
    
    # Specify ChromeDriver path if needed
    service = Service("chromedriver.exe")  # Change path if necessary
    driver = webdriver.Chrome(service=service, options=options)
    return driver

def get_links(driver, url):
    """Fetch all article links from a given section or subsection."""
    try:
        driver.get(url)
        time.sleep(3)  # Allow JavaScript to load
        links = [a.get_attribute("href") for a in driver.find_elements(By.TAG_NAME, "a") if "/news/" in a.get_attribute("href")]
        return list(set(filter(None, links)))  # Remove None values
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []

def check_inline_script(driver, url):
    """Check if the page contains 'inline-55034.js' script."""
    try:
        driver.get(url)
        time.sleep(5)  # Allow scripts to load
        scripts = [script.get_attribute("src") for script in driver.find_elements(By.TAG_NAME, "script")]
        if not any("inline-55034.js" in (script or "") for script in scripts):
            return url  # Return the URL if the script is missing
    except Exception as e:
        print(f"Error checking {url}: {e}")
    return None

def main():
    driver = get_driver()
    base_url = "https://www.sanook.com/"
    section_links = get_links(driver, base_url)

    all_missing_script_urls = []

    for section in section_links:
        article_links = get_links(driver, section)
        for article in article_links:
            missing_script_url = check_inline_script(driver, article)
            if missing_script_url:
                all_missing_script_urls.append(missing_script_url)

    driver.quit()

    print("Pages without 'inline-55034.js' script:")
    for url in all_missing_script_urls:
        print(url)

if __name__ == "__main__":
    main()
