# HOW TO SETUP

### 유의사항

해당 프로젝트에서 사용하고 있는 msw라는 라이브러리가 [esm모듈 이슈](https://github.com/mswjs/msw/issues/1267)로 인해<br />콘솔에 에러 메세지 출력 및 사파리로 접속 시 사이트가 다운되는 현상이 발생하고 있습니다(크롬에서는 정상동작).<br/>그리하여 동일한 데이터를 제공하는 api를 만들고 클라이언트 환경에서는 사용하지 않도록 수정했지만<br />TEST를 위해 서버 환경에서 동작하는 부분에서 동일한 에러가 발생하므로 <strong>테스트는 크롬에서 부탁드립니다.</strong>

### Source Code

1. [레포](https://github.com/29CM-Developers/frontend-29cm-test-northfacegawd) 를 클론한다.

```shell
$ git clone git@github.com:29CM-Developers/frontend-29cm-test-northfacegawd.git
```

2. 디펜던시를 설치한다.

```shell
$ npm install
```

3. 로컬에 프로젝트를 실행한다.

```shell
$ npm run dev
```
