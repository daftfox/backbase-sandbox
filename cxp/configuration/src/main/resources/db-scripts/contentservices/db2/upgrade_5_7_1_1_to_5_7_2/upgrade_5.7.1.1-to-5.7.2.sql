create table CANCEL_IMPORT (
    id bigint generated by default as identity,
    cancelled varchar(10),
    primary key (id)
);