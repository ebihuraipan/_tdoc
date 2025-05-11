from selenium import webdriver
import time
from selenium.webdriver.common.by import By
import os

def scsho(fn):
    path = os.path.dirname(os.path.abspath(__file__))
    full_path = os.path.join(path, "..","image",fn)
    driver.save_screenshot(full_path)
    
# driver = webdriver.Chrome('C:/200_Python/140_Webブラウザー操作(Selenium)/chrome') 
driver = webdriver.Chrome()
driver.get('http://localhost:3002')
time.sleep(2)
scsho("_01_01.png")

element = driver.find_element(By.LINK_TEXT, "スレッド1")
element.click()
time.sleep(2)
scsho("_01_02.png")

driver.execute_script("window.scrollTo(0, 500);")
scsho("_01_03.png")
time.sleep(5)
driver.quit()

# 実行
# python3 script/_01.py 