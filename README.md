# 나의 일주일 평점 남기기

<div align="center">
<img width="448" alt="image" src="https://user-images.githubusercontent.com/61547778/177597671-0b09d790-e899-43a6-bfa1-73c77afe5f1b.gif" />
</div>

## 기능

- 접속시 오늘 요일을 기준으로 정렬
- 요일별로 1 ~ 5 사이의 랜덤한 평점 생성
- 평점하는 페이지로 이동 (클릭 or 숫자 키보드로 입력)

## stack

- react-router-dom
- styled-components
- useMemo
- useCallback
- Lazy loading
- AWS S3
- AWS Cloud Front
- Github Actions

## 과제 질문

- Q1. 평균 평점 state를 메인 컴포넌트에 두셨나요, 하위 컴포넌트인 평균 평점 컴포넌트에 두셨나요?
- A1. 상위 컴포넌트에 두었습니다.

    - 선택하신 방식의 장단점은 무엇이라 생각하시나요?
    - A. 하위의 컴포넌트에서 state 사용할시에 props로 간단히 넘겨줄 수 있습니다.
    
    - 평균 평점과 리셋 버튼을 추가할 때 어떤 고민을 하셨나요?
    - A. 평점은 크진않지만 연산된 값을 사용하기 때문에, useMemo()를 사용해 최적화를 해야겠다고 생각했습니다.
    
- Q2. 과제 구현 간, 상태관리를 위해 useState를 사용해보고 배운 점을 적어주세요.
- A2. 렌더링이 데이터 중심으로 자동적으로 되는 점이, vanillaJS로 직접 DOM 조작을 할 때 보다 훨씬 생산성을 높여주었습니다.

- Q3. 랜덤 숫자가 아닌 평점 남기기 페이지에서 입력한 숫자를 반영하기 위해서는 어떻게 해야 할까요?
- A3. 우선 페이지가 react-router-dom 을 통해서 바뀌기 때문에 값을 공유하기 위해서는 전역적인 상태관리가 필요합니다. redux, contextAPI, recoil, mobX 등을 활용하거나, 가장 단순히는 Router       가 구현되어있는 최상위 컴포넌트에서 state를 가지고, props로 내려주는 방식이 있습니다.
