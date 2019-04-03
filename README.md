
# Hypersignal
> **하이퍼레저 기반 건물안전등급 등록 및 조회 앱** <br>
하이퍼레저와 신호등의 signal(빨강,노랑,초록)을 결합한 단어(Hyperldger + signal)


## Getting started

> 탈세, 안전점검 비용 감소 등의 이유로 건물 안전 점검에 대한 정보 **위변조** 를 막기 위해 개발을 시작하였습니다.<br>
건물주, 건물관리자, 정부, 시민 각 이해관계자간 **정보교환의 불편성** 을 최소화 할 수 있습니다.<br>
법령에 지정된 **안전등급 A,B등급 : 초록, C,D등급 : 노랑, E,F등급 : 빨강** 으로 표현하였습니다.<br>
<br>[![Video Label](http://img.youtube.com/vi/0pHnVIqmqoU/0.jpg)](https://youtu.be/0pHnVIqmqoU) 



## Prerequisites

* [Docker](https://www.docker.com/products) - latest
* [Docker Compose](https://docs.docker.com/compose/overview/) - latest
* [NPM](https://www.npmjs.com/get-npm) - latest
* [nvm]() - latest
* [Node.js](https://nodejs.org/en/download/) - latest
* [Git client](https://git-scm.com/downloads) - latest
* [Hyperledger]() - latest
* [Hyperledger Composer]() - latest
* [mongodb]() - latest

## Application Workflow Diagram

<img width="715" alt="contentMap" src="https://user-images.githubusercontent.com/44187477/55451567-755beb80-560e-11e9-8c48-82b14c9f6f77.png">

* 건물에 대한 등급 산정시 hyperledger DB에 저장이 되며 그 정보에 대한 내부 해쉬 알고리즘에 의해 **고유 해쉬 값(transaction ID)** 이 지정된다. 그 고유값은 모든 노드와 공유하게 됨<br>
이 후 위,변조의 이유로 정보를 추적할 때 이 고유 해쉬값을 query로 호출시 정보를 조작한 정보의 고유 값만 다른 노드들과 비교시 다르다는 것으로 **조작 판별 가능** 

```
yukil
Give examples
```

### Installing

1. 파일 클론합니다.
```
git clone https://github.com/Kyounghwan01/Hyperledger-building-security-app.git
```
2. DB에 있는 app.js파일을 실행합니다.
```
node app.js
```
3. mongodb를 실행합니다.
```
mongod
```
> 이후 아래 이미지와 같이 연결됬다는 콘솔을 확인합니다.
<img width="726" alt="back" src="https://user-images.githubusercontent.com/44187477/55452438-b2c27800-5612-11e9-852b-e3dbf6353ac6.png">


And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



<!-- Markdown link & img dfn's -->

