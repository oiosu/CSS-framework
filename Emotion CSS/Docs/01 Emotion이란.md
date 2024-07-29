### 01 Emotion이란

* Emotion js는 자바스크립트로 CSS 스타일을 작성하도록 설계된 라이브러리 이다. 

* 소스 맴, 레이블 및 테스트 유틸리티와 같은 기능을 통해 뛰어난 개발자 경험과 함께 강력하고 예측 가능한 스타일 구성을 제공한다. 

* 문자열 및 개체 스타일 모두 지원된다.

##### 💡 Emotion js 는 주로 Framwork Agnostic 과 React 두가지 방식으로 사용된다.

> 정보 기술(IT) 컨텍스트에서 Agnostic 은 일반화되어 다양한 시스템 간에 상호 운용할 수 있는 것을 맗안다. 



```bash
npm i @emotion/css
```

```bash
npm i @emotion/react
```

```bash
npm i @emotion/styled @emotion/react
```



##### 1. Framwork Agnostic

: Emotion은 프레임워크에 구애받지 않은 라이브러리 (다양한 프레임워크 및 라이브러리에서 사용 가능)

: 동일한 강력한 API와 기능으로 원하는 모든 곳에서 사용 가능 

* `@emotion/css` 패키지는 프레임워크에 구애받지 않으며 Emotion을 사용하는 가장 간단한 방법 
* 추가 설정, babel 플러그인 또는 기타 구성 변경이 필요하지 않음 

* vendor-prefixing, nested selector 및 미디어쿼리 (media queries) 를 지원함 
* CSS 함수를 사용하여 클래스 이름을 생성하고 cx를 사용하여 구성하는 것을 선호함



##### 2. React

: `@emotion/react` 패키지에는 리액트가 필요하고 가능한 경우 해당 프레임워크 사용자에게 권장함

* 구성 가능한 빌드 환경에서 리액트를 사용할때 가장 좋음 
* CSS Prop 
  * : style props와 유사하며, vender-prefixing, nested selector 및 미디어 쿼리(media queries)를 지원한다.
  * : 개발자가 스타일이 지정된 API 추상화를 건너뛰고 구성 요소와 요소를 직접 스타일 지정 가능 
  * : CSS Prop은 또한 개발자가 공통 사용자 정의 가능한 값에 쉽게 엑세스를 할 수 있도록 하는 인수로 테마와 함께 호출되는 함수 허용
* 아무런 configuration 없이 서버 가이드 렌더링을 지원
* 테마 기능을 기본적으로 사용 가능 
* 적절한 패턴과 구성이 설정되었는지 확인하기 위해 ESLint 플러그인 사용 가능 



