create table TB_IMPORT_PROCESS_LOGS (
    IMPORT_LOG_ID bigint not null,
    PORTAL_NAME varchar(255) not null,
    MESSAGE varchar(255),
    STATUS varchar(25) not null,
    START_DATE timestamp,
    END_DATE timestamp,
    primary key (IMPORT_LOG_ID)
);