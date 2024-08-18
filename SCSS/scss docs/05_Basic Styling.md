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

