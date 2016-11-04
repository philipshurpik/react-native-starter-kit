#!/usr/bin/env bash
if [[ "$TRAVIS_BRANCH" =~ ^ready\/.+ ]]; then
	if [[ -z `cat .git/config | grep pullrequest` ]]; then
		sed -i.bak 's/\[remote \"origin\"\]/[remote "origin"]\
		fetch = +refs\/pull\/*\/head:refs\/remotes\/origin\/pullrequest\/*/g' .git/config
		echo 'fetching pull requests'
		cat .git/config
	fi;
	git fetch origin
	git fetch origin master:master
	git checkout $TRAVIS_BRANCH

	HASH=`git log --pretty=format:'%H' -n 1`
	export PULL=`git show-ref | grep $HASH | grep pullrequest | grep -oEe '\d+$'`
	export EMAIL=`git log --pretty=format:'%ae' -n 1`
	export NAME=`git log --pretty=format:'%an' -n 1`

	git merge master
fi
