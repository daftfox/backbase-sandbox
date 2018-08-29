SET live=-Pwith-dashboard
SET mobile=

:loop
IF NOT "%1"=="" (
    IF "%1"=="-l" (
        SET live="-Pno-dashboard"
        SHIFT
    )
    IF "%1"=="-m" (
        SET mobile="-Pmobile"
        SHIFT
    )
    SHIFT
    GOTO :loop
)

call mvn clean package jetty:run %live% %mobile%