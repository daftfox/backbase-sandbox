## Prerequisites

 * Setup your SSH key in bitbucket or stash
 * Followed instructions of the README.md in **platform** folder

### Initial/clean build

To create the database:
```
mvn clean install -Pclean-database
```

## Running the webapps

### Running all 5 webapps at once:

 - On Linux/OS X: `bash run.sh`
 - On Windows: `run.bat`

* To run webapps in the background add `-b` flag  (Linux/OS x only)

### Running webapps individually

Web applications are inside `webapps` directory

* portalserver
* contentservices
* orchestrator
* search
* solr

Each webapp has a `run` script.


## Import the CXP Manager, the Collections and the Demo Portals

Wait until portal has started.

Change your working directory to `statics` and run this command to import CXP Manager:

```
mvn bb:import-dashboard
```

Then run this command to import the Collections:

```
mvn bb:import
```

Finally, run this command to import the Demo Portals:

```
mvn bb:import-experiences
```