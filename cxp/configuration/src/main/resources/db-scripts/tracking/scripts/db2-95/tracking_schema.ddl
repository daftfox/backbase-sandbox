create table tracking_events (
	id bigint not null,
	portalName varchar(255) not null,
    itemName varchar(255) not null,
    tagName varchar(255) not null,
    userName varchar(255),
    timestamp TIMESTAMP not null,
    primary key (id)
);

create index IDX_TRA_01 on tracking_events (userName);

create index IDX_TRA_02 on tracking_events (tagName);

create sequence hibernate_sequence;