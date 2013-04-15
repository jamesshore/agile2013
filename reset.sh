#!/bin/sh

git reset --hard
git clean -fdx
git checkout $1
