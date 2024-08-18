![image-20240818191406617](../../../../AppData/Roaming/Typora/typora-user-images/image-20240818191406617.png)

```html
<div id="root">
    <nav class="Navbar">...</nav>
    <aside class="big_sidebar">...</aside>
    <main>...</main>
</div>
```

![image-20240818191629929](../../../../AppData/Roaming/Typora/typora-user-images/image-20240818191629929.png)

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $bg-color;
  font-family: "Robot", sans-serif;

  #root {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 55px auto;
    grid-template-areas:
      "nav nav"
      "aside main";
    main {
      width: 100%;
      grid-area: main;
    }
  }
}
```

* **grid-template-areas**

지정된 그리드 영역 이름(grid-area)을 참조해 그리드 템플릿을 생성합니다.

* **grid-area**

**영역(Area) 이름을 설정**하거나, grid-row와 grid-column의 단축 속성

grid-area는 Grid Container가 아닌 Grid Item에 적용하는 속성입니다.



![image-20240818191744977](../../../../AppData/Roaming/Typora/typora-user-images/image-20240818191744977.png)
