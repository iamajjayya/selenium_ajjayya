from pages.google_search_page import GoogleSearchPage

def test_search_amazon_on_google(browser):
    google_page = GoogleSearchPage(browser)
    google_page.open("https://www.google.com")

    google_page.search_amazon("Amazon.in")

    google_page.click_first_result()

    assert "Amazon.in" in browser.title
