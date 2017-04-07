#!/bin/bash
curl --include --request POST "http://localhost:4741/games" \
    --header "Content-Type: application/json" \
    --data '{
      "game": {
        "id": 20,
        "cells": ["O", "X", "O", "X", "O", "X", "X", "O", "X"]
        "over": true
      }
    }'
