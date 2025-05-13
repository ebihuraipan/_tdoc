import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By

# スクショ
def scsho(fn):
    path = os.path.dirname(os.path.abspath(__file__))
    full_path = os.path.join(path, "..","image",fn)
    driver.save_screenshot(full_path)
    
# 起動
driver = webdriver.Chrome()
driver.get('http://localhost:3002')
time.sleep(2)
scsho("_02_01.png")
time.sleep(2)

# 入力
el = driver.find_element(By.ID, "createTitle")
el.send_keys("自動入力____タイトル")
el = driver.find_element(By.ID, "createText")
el.send_keys("自動入力____書き込み__1\n")
el.send_keys("自動入力____書き込み__2\n")
el.send_keys("自動入力____書き込み__3\n")
scsho("_02_02.png")
time.sleep(2)


# スレッド作成
el = driver.find_element(By.XPATH, "//*[text()='スレッド作成']")
el.click()
time.sleep(2)
scsho("_02_03.png")

# 終了
time.sleep(2)
driver.quit()

# 実行
# python3 script/_02.py 
