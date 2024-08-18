## 01. SASS

* 만약 스타일시트가 점점 더컺지고복잡해지면서 유지관리하기 어려울 때가 있다. 이러한사오항을위해 SASS가 도움을 줄 수 있다. 
* 중첩, 믹스인, 상속 및강력하고유지관리 가능한 CSS를 작성하는데 도움이 되는 기타 유용한기능과 같이아직 CSS에는 존재하지 않는 기능들이 있다.         
* SASS로 작업을 시작하면 사전 처리된  SASS파일을 웹 사이트에서 사용할 수 있는 일반 CSS 파일로 저장된다.    

​      

## 02. SASS 와 SCSS

```SCSS
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}
```

```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body 
    font: 100% $font-stack;
    color: $primary-color;

```

#### 🍩 SASS(Syntactically Awesome Style Sheets)

>  **CSS로 컴파일되거나 해석되는 전처리기(pre-processor) 스크립팅 언어**
>
> * SassScript느  그자체가 스크립팅 언어인 반면 SCSS는 기존 CSS 구문 위에 구축되는 SASS의 기본 문법  
> * CSS(Cascaded Style Sheets)와 같은 세미콜론과 대괄호를 사용
> * Sass는 실제로 수학 및 변수 지원을 통해 CSS를 더욱 강력하게 만들어 줌



---



#### 🍩 요약

| Sass                                  | Scss |
| ------------------------------------- | ---- |
| 코드를 CSS로 해석하는 전처리기 + 문법 | 문법 |

> Scss 문법을 기반으로 작성하면 Sass 전처리기로 CSS 로 해석하게 된다. 

