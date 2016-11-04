#!/usr/bin/env bash
set -e
if [[ "$TRAVIS_BRANCH" =~ ^ready\/.+ ]]; then
	echo "Merging $TRAVIS_BRANCH into master"

	MESSAGE=`echo $TRAVIS_BRANCH | awk '{split($0,a,"/"); print a[2]}' | sed 's/_/ /g'`

	export GIT_COMMITTER_EMAIL='travis@travis'
	export GIT_COMMITTER_NAME='Travis CI'

	echo '=================='
	echo pull    "$PULL"
	echo email   "$EMAIL"
	echo name    "$NAME"
	echo message "$MESSAGE"
	echo '=================='

	git checkout master
	git merge --squash $TRAVIS_BRANCH
	git commit -am "fixes #$PULL - $MESSAGE" --author="$NAME <$EMAIL>"
	git push origin master
	git push origin --delete $TRAVIS_BRANCH
else
	echo Skiping auto merge to master
fi
