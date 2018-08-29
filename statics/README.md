# Statics project

The statics project hold all the references to Backbase Widget Collections and your own project files. 

The `bb-maven-plugin` is configured to connect to your local development installation.


The bb-maven-plugin can be used for the following:

* Build collections using the binary npm package @bb-cli/bb

* Provision a Collection

* Packaging to Zip of Zips, External Packages and Sources

* Import & Export of Experiences


More information can be found on our [Community](https://community.backbase.com/documentation/cxs/latest/deploy-using-bb-maven-plugin)

## Basic Usage

To provision all your widget collection and custom projects listed in the statics `pom.xml`

```bash
mvn bb:provision
```

To import experiences configured in your statics project

```bash
mvn bb:import-experiences
```


## Set target experience services

You can configure remote profiles by adding / overwriting the host configuration properties in the statics `pom.xml` file:

```xml
    ...
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>com.backbase.maven.plugins</groupId>
                    <artifactId>bb-maven-plugin</artifactId>
                    <version>1.0.47</version>
                    <extensions>true</extensions>
                    <configuration>
                        <version>${portal.version}</version>
                        <host>${portal.host}</host>
                        <port>${portal.port}</port>
                        <username>${portal.username}</username>
                        <password>${portal.password}</password>
                        <!-- You can upgrade bb-cli version independently -->
                        <bbCliVersion>2.7.15</bbCliVersion>
                        <!-- Or choose to use your globally available bb-cli -->
                        <useGlobalBBCli>false</useGlobalBBCli>
                    </configuration>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>

    <profiles>
        <profile>
            <id>local</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
            <properties>
                <portal.version>6</portal.version>
                <portal.host>localhost</portal.host>
                <portal.port>8080</portal.port>
                <portal.username>admin</portal.username>
                <portal.password>admin</portal.password>
            </properties>
        </profile>

        <profile>
            <id>remote</id>
            <properties>
                <portal.host>remote</portal.host>
                <portal.port>8080</portal.port>
            </properties>
        </profile>
    </profiles>
    ...
```

You can also overwrite these using the command line parameters

```bash
mvn bb:provision -Dportal.host=<portalHost> -Dportal.port=80
```

## Widget Collection 3.0 Support



