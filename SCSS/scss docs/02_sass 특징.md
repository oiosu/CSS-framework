## 01. Variables

* 변수를 스타일시트 전체에서 재사용하려는 정보를 저장하는 방법
* 색상, 글꼴 스택 또는 재사용하고 싶은 CSS 값과 같은 항목을 저장가능
* SASS는 `$` 기호를사용하여 변수를 만든다.

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 1--% $font-stack;
    color: $primary-color;
}
```

```css
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}
```



## 02. Nesting

* SASS를 사용하면 HTML의 동일한 시각적 계층 구조를 따르는 방식으로 CSS 선택기를 중첩가능

```SCSS
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li { display: inline-block; }
    
    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

```css
nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
nav li {
    display: inline-block;
}
nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
}
```



## 03. Parials

* 다른 Sass 파일에 포함할 수 있는 CSS의 작은 조각이 포함된 부분 Sass 파일 생성
* CSS를 모듈화하고 유지 관리를 더 쉽게 유지하는 데 도움이 되는 좋은 방법
* 밑줄을 사용하면 파일이 부분(partial) 파일일 뿐이며 CSS 파일로 생성되어서는 안 된다는 것을 Sass가 알 수 있음 
* Sass 부분은 @use 규칙과 함께 사용됨



## 04. Modules

* `@use` 를사용하여 가져온 스타일시트를 모듈이라고 부른다. 
* 단일 파일에 모든 SASS를 작성할 필요 없음
* `@use` 규칙을 사용하여 원하는대로 분할가능 
* 이러한 규칙은 다른 SASS 파일을 모듈로 로드함 (=>  파일 이름을 기반으로 하는 네임스페이스를  사용하여 SASS 파일의 변수, mixins 및 function 를 참조할 수 있다.  ) 

```scss         
//_base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color; 
}
```

```scss
// style.scss
@use 'base';

.inverse {
    background-color: base.$primary-color;
    color: white;
}
```

> styles.scss 파일에서 @use 'base'를 사용하고 있습니다. 
>
> 파일을 사용할 때 파일 확장자를 포함할 필요가 없습니다. 
>
> Sass는 가 알아서 파악할 수 있습니다.

```css
//css
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}

.inverse {
    background-color: base.$primary-color;
    color: white;
}
```



## 05. Mixins

* CSS의 일부 항목은 계속 반복해서 작성하는 부분이 있음
* mixin을 사용하면 사이트 전체에서 재사용하려는 CSS 선언 그룹을 만들 수 있음
* Sass를 DRY하게 유지하는 데 도움이 됨
* 믹스인을 보다 유연하게 만들기 위해 값을 전달 할 수도 있음

```scss
@mixin theme($theme: DarkGray) {
    background: $theme;
    box-shadow: 0 0 1px rgba($theme, .25);
    color: #fff;
}
.info {
    @include theme;
}
.alert {
    @include theme($theme: DarkRed);
}
.success {
    @include theme($theme: DarkGreen);
}
```

> * 믹스인을 생성하려면 @mixin 지시문을 사용하고 이름을 지정한다. 
> * 또한 괄호 안에 변수 $theme를 사용하여 원하는 주제를 전달 가능
> * 믹스인을 생성한 후 `@include`로 시작하고 믹스인 이름이 뒤따르는 CSS 선언으로 사용할 수 있음

```css
.info {
    background: DarkGray;
    box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
    color: #fff;
}
.alert {
    background: DarkRed;
    box-shadow: 0 0 1px rgba(136, 0, 0, 0.25);
    color: #fff;;
}
.success {
    background: DarkGreen;
    box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
    color: #fff;
}
```



## 06. Extend/Inheritance

* @extend를 사용하면 한 선택기에서 다른 선택기로 CSS 속성 집합을 공유 가능
* 다음 코드에서는 extend, placeholder 클래스와 함께 사용되는 또 다른 기능을 사용하여 오류, 경고 및 성공에 대한 간단한 일련의 메시징을 만드는 예시이다.
*  `placeholder` 클래스는 확장될 때만 print하는 특수 유형의 클래스이며 컴파일된 CSS를 깔끔하고 깨끗하게 유지하는 데 도움이 될 수 있음

```scss
/* This css sill print because %message-shared is extended. */

%messgae-shard {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

// This css won't print becasue %equal-height is never extended.
%equal-height {
    display: flex;
    flex-wrap: wrap;
}
.message {
    @extend %message-shared;
}
.success {
    @extend %message-shared;
    border-color: green;
}
.error {
    @extend %message-shared;
    border-color: red;
}
.warning {
    @extend %message-shared;
    border-color: yellow;
}
```



```css
/* This css sill print because %message-shared is extended. */

.message, .success, .error, .warning {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}
.success {
    border-color: green;
}
.error {
    border-color: red;
}
.warning {
    border-color: yellow;
}
```



> * 위의 코드가 하는 일은 .message, .success, .error 및 .warning이 %message-shared처럼  작동하도록 지시하는 것
> * 즉, %message-shared가 표시되는 모든 위치에 .message, .success,  .error 및 .warning도 표시됨 
> * Sass의 placeholder 클래스 외에 대부분의 간단한 CSS 선택기를 확장할 수 있지만 placeholder를 사용하는 것이 스타일의 다른 곳에 중첩된 클래스를 확장하지 않도록 하는 가장 쉬운 방법임
> * %equal-heights는 확장되지 않으므로 %equal-heights의 CSS는 생성되지 않음



## 07. Operators

* Sass에는 +, -, *, math.div() 및 %와 같은 소수의 표준 수학 연산자가 있다.
* 예시 코드는 옆에 대한 너비를 계산하기 위해 간단하게 계산하는 코드이다.      

```scss
@use "sass:math";

.container {
    display: flex;
}

articel[role="main"] {
    widht: math.div(600px, 960px) * 100%;
}
aside[role="complementary"] {
    width: math.div(300px, 960px) * 100%;
    margin-left: auto;
}
```

> Sass의 연산을 사용하면 픽셀 값을 가져와서 많은 번거로움 없이 백분율로 변환하는 것과 같은 작업을 수행 가능



 

