#!/bin/bash
curl --include --request POST "http://localhost:4741/" \
    --header "Content-Type: application/json" \
    --data '{
      "game": {
        "id": 20,
        "cells": []
        "over": true
        "player_x": {
          "id":
          "email": "'"${EMAIL}"'",
        },
        "player_o": null
      }
    }'
