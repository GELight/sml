#!/bin/bash
clear

echo "##############################################"
echo "# SML - Build Release Version - $RELEASE_VERSION"
echo "##############################################"

GIT_RELEASE_VERSION=$(git describe --abbrev=0 --tags)
GIT_RELEASE_VERSION=$(echo $GIT_RELEASE_VERSION| cut -d'v' -f 2)

echo $GIT_RELEASE_VERSION
echo $RELEASE_VERSION

if [[ "$RELEASE_VERSION" == "$GIT_RELEASE_VERSION" ]]; then
    echo "Release version $RELEASE_VERSION already exists on git!"
else
    npm run build
    git add .
    git commit -m "Release build v$RELEASE_VERSION"
    git push
    git tag -a v$RELEASE_VERSION -m "Release build v$RELEASE_VERSION"
    git push --tags
    npm publish
fi
