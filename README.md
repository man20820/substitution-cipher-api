# Substitution Cipher Api
simple substitution cipher api. this api can encrypt and decrypt your data.

# Install
git clone git@github.com:man20820/substitution-chiper-api.git
npm install
cp .env.example .env # and set your port
node index.js

# Usage
Encrypt
```
Method: POST
Content-Type: application/json
Url: http://<ip/host>:<port>/api/encrypt
```

```json
{
    "word": "hello"
}
```

Decrypt
```
Method: POST
Content-Type: application/json
Url: http://<ip/host>:<port>/api/decrypt
```

```json
{
    "encrypted": "blablabla"
}
```
