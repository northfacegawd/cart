# 29CM 프론트엔드 코딩 과제

## 개요

29CM 프론트엔드 팀의 채용 프로세스 중 사전 과제에 관한 프로젝트입니다.

## 개발

### 기술 스택

### 구현 사항
* emotion제외 ui라이브러리를 사용하지 않고 구현하였습니다.
* products(상품 리스트 페이지), cart(장바구니 페이지) 구현
* 장바구니 담기 구현(이미 담은 상품이라도 담을 수 있음) - 해당 방법으로 구현한 이유: 우선 성능적인 측면에서는 상품 컴포넌트에서 장바구니에 해당 상품이 담겼는지 확인하기 위해서 스토어를 구독해야하며, 이과정에서 한 컴포넌트에서 데이터를 변경하더라도 모든 상품 컴포넌트가 리렌더링됩니다. 사용자의 편의성을 위해서 이미 담은 상품이면 빼기 버튼을 보여줄 수 있어도 이미 담은 상품을 또 담을 수 있기 때문에 이 경우에도 사용자는 장바구니 페이지로 이동해야합니다. 이러한 경우들을 생각하면 장바구니에 담긴 항목이라도 계속 담을 수 있고 각 컴포넌트의 구독 항목을 줄여서 리렌더링을 조금이라도 줄이는 것이 좋다고 생각합니다.
* 장바구니 담기는 버튼을 누르면 모달이 뜨며 모달 안에서 상품 갯수를 선택하여 장바구니에 담을 수 있습니다.
* 장바구니에 상품을 담았을 시 상단 우측에 방금 담은 상품의 이름, 및 사진이 알람으로 뜹니다.
* 장바구니에는 3개의 상품을 담을 수 있으면 3개 미만이라면 각 상품의 갯수는 상관 없습니다.
* 한 페이지당 5개의 항목이 나오도록 페이지네이션을 구현했습니다.
* 장바구니 목록에서 체크한 항목만 최종 결제 금액에 포함되도록 구현했습니다.
* 쿠폰 선택하기 버튼을 누르면 모달이 나와서 해당 모달에서 쿠폰을 선택할 수 있도록 구현 하였습니다.
* [29CM 프론트엔드팀 코딩과제 문서](https://29cm.notion.site/29CM-4d366ecbfbc542fbba08fa7cadbf053e)에 있는 요구사항대로 쿠폰을 최종 결제 금액에 적용하였습니다.

| 속성          | 값                                                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 프레임워크    | [NextJS](https://nextjs.org/)                                                                                                                        |
| 패키지 매니저 | [npm](https://www.npmjs.com/)                                                                                                                        |
| 언어          | [Typescript](https://www.typescriptlang.org/)                                                                                                        |
| 상태관리 라이브러리| [Zustand](https://github.com/pmndrs/zustand)                                                                                                        |
| 비동기 통신     | [React Query](https://www.npmjs.com/package/react-query)                                                                                            |
| 스타일        | [emotion](https://styled-components.com/)                                                                                                            |
| 테스팅        | [Jest](https://jestjs.io/), [testing-library](https://testing-library.com/docs/react-testing-library/intro/), [Storybook](https://storybook.js.org/) |
| 서비스워커     | [msw](https://mswjs.io/)                                                                                                                             |
| 코드 퀄리티   | [eslint](https://eslint.org/), [prettier](https://prettier.io/)                                                                                      |
| 코드 관리     | [git](https://git-scm.com/) & [github](https://www.github.com/)                                                                                      |


### 환경 세팅

[해당 문서](./INSTALLATION.md) 를 참고한다.

### 컨벤션

[해당 문서](./CONVENTION.md) 를 참고한다.

### 테스트
Storybook을 통해 해당 컴포넌트의 동작 및 디자인을 점검
Jest, React Testing Library를 통해 hook, util 함수 같은 비즈니스 로직에 일정 부분을 테스트

## 담당자

<table>
    <tr>
      <td align="center">
        <a href="https://github.com/northfacegawd">
            <img
                src="https://avatars.githubusercontent.com/northfacegawd"
            width="200px;"
            />
            <br />
            <sub><b>이용준</b></sub>
        </a>
        <br />
        </td>
    </tr>
</table>


