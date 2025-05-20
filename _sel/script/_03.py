import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By

# スクショ
def scsho(fn):
    time.sleep(2)
    path = os.path.dirname(os.path.abspath(__file__))
    full_path = os.path.join(path, "..","image",fn)
    driver.save_screenshot(full_path)
    time.sleep(1)
    
# 起動
driver = webdriver.Chrome()
driver.get('http://localhost:3002')
time.sleep(2)
scsho("_03_01.png")

# クリック
element = driver.find_element(By.LINK_TEXT, "スレッド1")
element.click()
scsho("_03_02.png")


# 入力1
el = driver.find_element(By.ID, "addTextTop")
el.send_keys("自動入力____上のフォーム書き込み__1\n")
scsho("_03_03.png")

# 書き込み
el = driver.find_element(By.XPATH, "//*[text()='書き込み']")
el.click()
scsho("_03_04.png")

# スクロール
driver.execute_script("window.scrollTo(0, 500);")
scsho("_03_05.png")

# 入力1
el = driver.find_element(By.ID, "addTextBottom")
el.send_keys("自動入力____下のフォーム書き込み__1\n")
scsho("_03_06.png")

# 書き込み
el = driver.find_element(By.XPATH, "//*[text()='書き込み']")
el.click()
scsho("_03_07.png")

# 終了
driver.quit()

# 実行
# python3 script/_03.py 
