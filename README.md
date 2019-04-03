
# hypersignal
> **하이퍼레저 기반 건물안전등급 등록 및 조회 앱**

## Getting started

> 탈세, 안전점검 비용 감소 등의 이유로 건물 안전 점검에 대한 정보 위변조를 막기 위해 개발을 시작하였습니다.<br>
건물주, 건물관리자, 정부, 시민 각 이해관계자간 정보교환의 불편성을 최소화 할 수 있습니다<br><br>[![Video Label](http://img.youtube.com/vi/0pHnVIqmqoU/0.jpg)](https://youtu.be/0pHnVIqmqoU) 



## Prerequisites

* [Docker](https://www.docker.com/products) - latest
* [Docker Compose](https://docs.docker.com/compose/overview/) - latest
* [NPM](https://www.npmjs.com/get-npm) - latest
* [nvm]() - latest
* [Node.js](https://nodejs.org/en/download/) - latest
* [Git client](https://git-scm.com/downloads) - latest
* [Hyperledger]() - latest

## Application Workflow Diagram

<img width="715" alt="contentMap" src="https://user-images.githubusercontent.com/44187477/55451567-755beb80-560e-11e9-8c48-82b14c9f6f77.png">

* 건물에 대한 등급 산정시 hyperledger DB에 저장이 되며 그 정보에 대한 내부 해쉬 알고리즘에 의해 **고유 해쉬 값(transaction ID)** 이 지정된다. 그 고유값은 모든 노드와 공유하게 됨<br>
이 후 위,변조의 이유로 정보를 추적할 때 이 고유 해쉬값을 query로 호출시 정보를 조작한 정보의 고유 값만 다른 노드들과 비교시 다르다는 것으로 **조작 판별 가능** 

## steps



### 수정 중입니다 :)

```
yukil
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

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

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


<iframe width="640" height="360" src="https://youtu.be/0pHnVIqmqoU" frameborder="0" gesture="media" allowfullscreen=""></iframe>

<!-- Markdown link & img dfn's -->

