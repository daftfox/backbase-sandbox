alter table TB_IMPORT_PROCESS_LOGS
    ADD CREATOR_USERNAME nvarchar(255) null
GO

alter table TB_IMPORT_PROCESS_LOGS
    ALTER COLUMN MESSAGE nvarchar(MAX) null
GO
