#!/bin/bash

#INDEX=3 TOKEN=copy token
# curl --include --request PATCH "http://localhost:4741/games/" \
#     --header "Content-Type: application/json" \
#     --data '{
#       "game": {
#         "cell" {
#           "index": "'"${INDEX}"'",
#           "value": "'"${VALUE}"'"
#         },
#         "over": "'"${BOOLEAN}"'"
#       }
#     }'

#ID=20 TOKEN=BAhJIiVkOWZlYTczZmIzOTY4YjgxYzMzZTM4N2YyYjA4MTBmNQY6BkVG--e0e3ae10b7815bfe927d493d11a673fbb006a35d sh update.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/games/$ID"
curl "${API}${URL_PATH}" \
      --include \
      --request PATCH \
      --header "Authorization: Token token=$TOKEN" \
      --header "Content-Type: application/json" \
      --data '{
        "game": {
          "cell": {
            "index": 0,
            "value": "x"
          },
          "over": false
        }
      }'


#ID=21 TOKEN=BAhJIiUwZjVjNTQ3YjJhMTc2MmQ5MzE2NjViYjYxMmRiZTFiNAY6BkVG--605e440df67dd9fa02c105752fd10d47dbe16aae
