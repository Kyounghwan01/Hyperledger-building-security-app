
# Hypersignal
> **하이퍼레저 기반 건물안전등급 등록 및 조회 앱** <br>
하이퍼레저와 신호등의 signal(빨강,노랑,초록)을 결합한 단어(Hyperldger + signal)


## Getting started

> 탈세, 안전점검 비용 감소 등의 이유로 건물 안전 점검에 대한 정보 **위변조** 를 막기 위해 개발을 시작하였습니다.<br>
건물주, 건물관리자, 정부, 시민 각 이해관계자간 **정보교환의 불편성** 을 최소화 할 수 있습니다.<br>
법령에 지정된 **안전등급 A,B등급 : 초록, C,D등급 : 노랑, E,F등급 : 빨강** 으로 표현하였습니다.<br>
<br>[![Video Label](http://img.youtube.com/vi/0pHnVIqmqoU/0.jpg)](https://youtu.be/0pHnVIqmqoU) 



## Prerequisites

* [React-native](https://facebook.github.io/react-native/) - latest
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

## Installing

### 1. 파일 클론합니다.
```
git clone https://github.com/Kyounghwan01/Hyperledger-building-security-app.git
```
### 2. DB에 있는 app.js파일을 실행합니다.
```
node app.js
```
### 3. mongodb를 실행합니다.
```
mongod
```
> 이후 아래 이미지와 같이 연결됬다는 콘솔을 확인합니다.
<img width="726" alt="back" src="https://user-images.githubusercontent.com/44187477/55452438-b2c27800-5612-11e9-852b-e3dbf6353ac6.png">

### 4. Hyperledger server 실행
```
stopFabric.sh
```
### 5. Hyperledger Peer 생성
```
createPeerAdminCard.sh
```
### 6. Hyperledger network 생성
```
yo hyperledger-composer:businessnetwork
```
#### 6.1. 네트워크 생성
```
Bushiness network name: safety_check<br>
Description: safety_check(자유롭게 적어도 됨)<br>
Author name: admin(자유롭게 적어도 됨)<br>
Author email: admin@safety_check(자유롭게 적어도 됨)<br>
License: Apache-2.0<br>
Namespace: org.acme.model<br>
빈 네트워크를 설정하시겠습니까?'의 질문에는 Yes를 선택
```
#### 6.2. 생성된 네트워크 내에서 파일 수정<br>
#### 6.2.1. org.acme.model.cto 파일 수정<br>
#### 6.2.2. logic.js 파일 수정<br>
#### 6.2.3. permissions.acl 파일 수정<br>
#### 6.2.4. 수정 이후 아래 명어로 .bna 파일 생성<br>
```
composer archive create -t dir -n .
```
#### 6.2.5. 생성된 .bna 파일을 네트워크에 설치
```
composer network install --card PeerAdmin@hlfv1 --archiveFile safety-check@0.0.1.bna
```
#### 6.2.6. 설치한 네트워크 실행
```
composer network start --networkName safety-check --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```
#### 6.2.7. 접속 카드 생성
```
composer card import --file networkadmin.card 
```
#### 6.2.8. 설치한 네트워크 핑 테스트
```
composer network ping --card admin@safety-check
```
#### 6.2.9. 위 작업 모두 완료시 컨트랙트 포함한 서버 실행
```
composer-rest-server

Enter the name of the business network card to use: admin@safety_check
Specify if you want namespaces in the generated REST API: never use namespaces
Specify if you want to enable authentication for the REST API using Passport: No
Specify if you want to enable event publication over WebSocket: Yes
Specify if you want to enable TLS security for the REST API: No
```
#### 6.2.10. localhost:3000 접속 

### 7. 앱 실행<br>
#### 7.1. 다운 받은 앱 dir에서 실행
```
expo start
```


## Contributing

1. (<https://github.com/Kyounghwan01/Hyperledger-building-security-app.git>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.


## Versioning



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contact

> email : noh5524@gmail.com


<!-- Markdown link & img dfn's -->

