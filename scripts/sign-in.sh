#!/bin/bash

#EMAIL=van@gmail.com PASSWORD=pass
curl "http://httpbin.org/post" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\"
    }
  }"

# data output from curl doesn't have a trailing newline
echo
