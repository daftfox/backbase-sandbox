# Backbase 6 Platform

The Backbase Platform services are required to run DBS and CX on your local machine and is composed of the following services:

- Eureka Service Registry
- Edge Router
- LDAP Authentication Provider. 

## Running Backbase 6 Platform Services

```bash
mvn blade:run
```

## Docker Compose for MySQL and ActiveMQ

Inside `platform` run `docker-compose up -d` to start MySQL and Active MQ.

### Native MySQL

* Install MySQL 5.7.x or higher
* Configure MySQL according to settings stored in `mysql/config/my.cnf`


### Native ActiveMQ

Install [Active MQ 5.14.x](http://activemq.apache.org/activemq-5145-release.html)
