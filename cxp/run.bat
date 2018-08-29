cd webapps\contentservices
start "Content Services" run.bat
cd ..\orchestrator
start "Orchestrator" run.bat

cd ..\portalserver

ECHO Run Portal Services
start "Portal Server" run.bat
GOTO portallaunched

:portallaunched

cd ..\solr
start "Solr" run.bat

cd ..\search

if NOT "%1" == "-s" GOTO allstarted

start "Search Services" run.bat

:allstarted

cd ..\..
