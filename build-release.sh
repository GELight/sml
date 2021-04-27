#!/bin/bash

# NOTICE:
    # Needed dependency - "jq": "sudo apt-get install jq"

clear

echo "##############################################"
GIT_RELEASE_TAG=$(git describe --abbrev=0 --tags)
GIT_RELEASE_VERSION=$(echo $GIT_RELEASE_TAG| cut -d'v' -f 2)

echo "SML - Current Release Version $GIT_RELEASE_VERSION"
echo "##############################################"

echo

echo "Enter new version:"
read -r VERSION
echo

if [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+ ]]; then
    read -p "SML - Build Release v$VERSION - are you sure? (y/n) " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Releasing $VERSION ..."

        if [[ "$VERSION" == "$GIT_RELEASE_VERSION" ]]; then
            echo "Release version $VERSION already exists on git!"
        else
            echo $(jq . package.json | jq ".version = \"$VERSION\"") > package.json
            auto-changelog -u -p --tag-prefix 'v'
            npm install
            npm run build
            git add .
            git commit -m "Release build v$VERSION"
            git push
            git tag -a v$VERSION -m "Release build v$VERSION"
            git push --tags
            npm publish --access public
        fi

    fi

else
  echo "Your specified version '$VERSION' has a wrong structure!"
  echo "Correct example would be: 2.12.4 | <MAJOR>.<MINOR>.<PATCH>"
  echo
fi