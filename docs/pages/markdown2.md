#

##  常用語法查表
  
- #### 文字

| 說明 | Markdown語法 | 
| :-----: | :-----: | 
| <h1>標題大小 | # |  
|  **粗體字**| ** 粗體字 ** | 
|  *斜體字* | * 斜體字 * |



- #### 表格
```
| 說明         | Markdown語法 | 
| :-----:     |    :-----:   |  
| <h1>標題大小 |      #       |  
|  **粗體字**  | ** 粗體字 **  | 
|  *斜體字*    |  * 斜體字 *   |

```

- #### 對齊方式
```
| 置左 | 置中 | 置右|
| :----- | :-----: | -----:  |
| 測試左邊|測試中間|測試右邊|
```



-   | 置左 | 置中 | 置右|
  | :----- | :-----: | -----:  |
  | 測試左邊|測試中間|測試右邊|


- #### 使用程式碼區塊
```py
  ```python
  print("hellow , world")
  ```
```   

- #### 圖片
```
![文字內容](圖片/路徑.png)  
```

- #### [連結](http://zoxul.gitlab.io/gitlabtest)

    ```
    [zoxul](http://zoxul.gitlab.io/gitlabtest)
    ```



##  常用指令

- ####  查看有哪些主題可以選擇

  ```python :root 
  mkdocs build --help | grep theme
  ```

- ####  新增專案

  ```python
  mkdocs new my-project
  ```

- #### 新增文件

  ```python
  touch index.md 
  ```

- #### 建立靜態網站
  
  ```python
  mkdocs build
  ```


<br>
---

### 注意事項
使用MarkDown時應特別注意Tab及空白鍵的使用時機


在 MkDocs 中，Markdown 語法會被轉換為對應的 HTML 標籤，然後這些 HTML 標籤可以被 CSS 選擇器選中並應用樣式。以下是一些常見的 Markdown 語法及其對應的 HTML 標籤和 CSS 選擇器：

粗體：Markdown 中的粗體語法（**粗體文字** 或 __粗體文字__）會被轉換為 <strong> 標籤。在 CSS 中，您可以使用 strong 選擇器來選擇這些元素。

斜體：Markdown 中的斜體語法（*斜體文字* 或 _斜體文字_）會被轉換為 <em> 標籤。在 CSS 中，您可以使用 em 選擇器來選擇這些元素。

刪除線：Markdown 中的刪除線語法（~~刪除線文字~~）會被轉換為 <del> 標籤。在 CSS 中，您可以使用 del 選擇器來選擇這些元素。

代碼：Markdown 中的代碼語法（`代碼文字`）會被轉換為 <code> 標籤。在 CSS 中，您可以使用 code 選擇器來選擇這些元素。

鏈接：Markdown 中的鏈接語法（[鏈接文字](https://example.com)）會被轉換為 <a> 標籤。在 CSS 中，您可以使用 a 選擇器來選擇這些元素。

圖片：Markdown 中的圖片語法（![圖片描述](https://example.com/image.jpg)）會被轉換為 <img> 標籤。在 CSS 中，您可以使用 img 選擇器來選擇這些元素。

請注意，這些都是基本的選擇器，您也可以使用更複雜的選擇器來選擇特定的元素，例如使用類別選擇器（.class-name）、ID 選擇器（#id-name）或屬性選擇器（[attribute="value"]）。