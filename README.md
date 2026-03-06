# Random Data Generator API

로컬에서 테스트용 데이터를 빠르게 생성하기 위한 간단한 API 서버입니다.  
`faker` 라이브러리를 사용하여 랜덤 유저 데이터를 생성합니다.

---

# 1. Installation

프로젝트를 로컬로 내려받습니다.

```bash
git clone <your-repository-url>
cd random-data-generator
```

패키지를 설치합니다.

```bash
npm install
```

---

# 2. Run Server

서버를 실행합니다.

```bash
node app.js
```

또는 dev 스크립트가 있다면

```bash
npm run dev
```

서버가 실행되면 기본 포트는 다음과 같습니다.

```
http://localhost:5555
```

---

# 3. API Usage

## Generate Random Users

랜덤 유저 데이터를 원하는 개수만큼 생성합니다.

### Request

```
GET /fake/users/:count
```

### Example

```
http://localhost:5555/fake/users/5
```

### Response

```json
[
  {
    "userId": "uuid",
    "username": "random_username",
    "email": "user@email.com",
    "avatar": "https://...",
    "password": "random_password",
    "birthdate": "1995-02-14",
    "registeredAt": "2024-03-01"
  }
]
```

---

# 4. Error Response

count 값이 1보다 작거나 잘못된 경우

```json
{
  "message": "데이터는 1set 이상 요청 할 수 있습니다."
}
```

---

# 5. Tech Stack

- Node.js
- Express
- Faker

---

# 6. Use Cases

이 API는 다음과 같은 상황에서 사용할 수 있습니다.

- API 테스트용 더미 데이터 생성
- 프론트엔드 UI 테스트
- 데이터 시드(seed) 생성

---

# 7. Example with curl

```bash
curl http://localhost:5555/fake/users/10
```

랜덤 유저 10명이 JSON 형태로 반환됩니다.