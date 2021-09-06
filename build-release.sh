#!/bin/bash

# NOTICE:
    # Needed dependency - "jq": "sudo apt-get install jq"

clear

echo "##############################################"
GIT_RELEASE_TAG=$(git describe --abbrev=0 --tags)
GIT_RELEASE_VERSION=$(echo $GIT_RELEASE_TAG| cut -d'v' -f 2)

USER=$(npm whoami)

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

echo "SML - Current Release Version $GIT_RELEASE_VERSION"
echo "##############################################"

echo

echo "Enter new version:"
read -r VERSION
echo

if [ $USER = "gelight" ]; then

    if [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+ ]]; then
        read -p "SML - Build Release v$VERSION - are you sure? (y/n) " -n 1 -r
        echo

        if [ $LOCAL = $REMOTE ]; then

            if [[ $REPLY =~ ^[Yy]$ ]]; then

                if [[ "$VERSION" = "$GIT_RELEASE_VERSION" ]]; then
                    echo "Release version $VERSION already exists on git!"
                else
                    echo
                    
                    echo "Current git release version $GIT_RELEASE_VERSION"
                    echo "Create release $VERSION"
                    
                    echo

                    echo "1/6 - Update package version to $VERSION in package.json."
                    echo $(jq . package.json | jq ".version = \"$VERSION\"") > package.json
                    
                    echo "2/6 - Generate changelog file."
                    auto-changelog -u -p --tag-prefix 'v'

                    echo "3/6 - Build package."
                    npm install
                    npm run build

                    echo "4/6 - Commit release changes on git."
                    git add .
                    git commit -m "Release build v$VERSION"
                    git push

                    echo "5/6 - Set release tag on git."
                    git tag -a v$VERSION -m "Release build v$VERSION"
                    git push --tags
                    
                    echo "6/6 - Publish package on NPM."
                    npm publish --access public
                fi

            fi

        elif [ $LOCAL = $BASE ]; then
            echo "Need to pull"
        elif [ $REMOTE = $BASE ]; then
            echo "Need to push"
        else
            echo "Diverged"
        fi
        
    else
        echo "Your specified version '$VERSION' has a wrong structure!"
        echo "Correct example would be: 2.12.4 | <MAJOR>.<MINOR>.<PATCH>"
        echo
    fi

else
    echo "Please login to NPM!"
fi
