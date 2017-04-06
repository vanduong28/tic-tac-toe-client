#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
#ID=4 OLDPW=test NEWPW=test1 TOKEN=BAhJIiVjYzVhNmQzZjkxMjYyNzdiZThmYmM4ZWY3N2I5MTg4OQY6BkVG--e8e95110a08e4d52178ce244358b94c024b4bf5a scripts/change-password-json.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
# data output from curl doesn't have a trailing newline
echo
