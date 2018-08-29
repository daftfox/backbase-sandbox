#!/bin/sh

LIVE=-Pwith-dashboard
MOBILE=

while getopts "lm" opt; do
	case $opt in
		l)
			LIVE="-Pno-dashboard"
			;;
		m)
			MOBILE="-Pmobile"
			;;
	esac
done

mvn clean package jetty:run $LIVE $MOBILE