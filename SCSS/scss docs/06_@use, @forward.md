## 01. **@use, @forward를 이용한 partial 구현**

* `@import` 규칙을 사용하는 것을 권장 하지 않음 대신 `@use` 규칙 사용하기
*  현재 Dart Sass만 @use를 지원합니다. 다른 구현의 사용자는 대신 @import 규칙을 사용하기



#### 🤔 왜  @use 를 사용해야할까?

* @import는 모든 변수, 믹스인 및 함수를 전역적으로 액세스할 수 있도록 합니다. 이로 인해 어떠한 것이 어디에 정의되었는지 위치를 말하기가 어렵다.
*  모든 것이 전역적이기 때문에 라이브러리는 이름 충돌을 피하기 위해 모든 멤버에 접두사를 붙여야 합니다.
* @extend 규칙도 전역적이므로 어떤 스타일 규칙이 확장될지 예측하기 어렵습니다.
* 각 스타일시트는 @imported할 때마다 실행되고 CSS가 내보내지므로 컴파일 시간이 늘어나고 출력이 부풀려집니다.



## 02. @import에서 @use로 변환하기

(1) `*@import* "./abstracts/variables";` 를@use로 변환하기 

```scss 
@use "./abstracts/variables";
```



(2) error 해결하기

![image-20240818183815535](../../../../AppData/Roaming/Typora/typora-user-images/image-20240818183815535.png)

* 방법1

어디서 가져왔는지 명시해주기 `background-color: variables.$bg-color;` (충돌 피하기)

* 방법 2

  variables nasmesapce를 변경 해줄수도 있다.    

```scss
@use "./abstracts/variables" as v;
```

```scss
background-color: v.$bg-color;
```

* 방법 3

```scss
@use "./abstracts/variables" as *;
```

```scss
background-color: $bg-color;
```



## 03. @forward를 이용해서 index.scss에서 모아주기 

 ```scss
 // abstracts index.scss
 @forward "mixins";
 @forward "variables";
 ```

```scss
// layout index.scss
@forward "navBar/leftNav";
@forward "navBar/navBar";
@forward "navBar/rightNav";
@forward "navBar/searchBar";

@forward "sideBar/bigSideBar";
@forward "sideBar/sideBar";
@forward "sideBar/smallSideBar";
```

```scss
// pages index.scss
@forward "mainPage";
@forward "searchedVideosPage";
@forward "videoPage";
```

```scss
// main.scss
//import 한 부분 모두 바꿔주기
@use "abstracts" as *;
@use "layout";
@use "pages";
```



#### 🏷️abstract 부분은 모든 scss에서 사용되기에 모든 곳에서  @use를 이용해서 가져오기     

```scss
//경로 주의하기
@use '../../abstracts' as * ;
x@use '../../abstracts' as * ;
x@use '../abstracts' as * ;
```

