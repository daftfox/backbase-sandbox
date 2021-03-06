ALTER TABLE TB_IMPORT_PROCESS_LOGS
    ADD CREATOR_USERNAME nvarchar2(255);

ALTER TABLE TB_IMPORT_PROCESS_LOGS
    ADD (TMP_Message  CLOB);

UPDATE TB_IMPORT_PROCESS_LOGS SET TMP_Message=MESSAGE;
    COMMIT;

ALTER TABLE TB_IMPORT_PROCESS_LOGS
    DROP COLUMN MESSAGE;

ALTER TABLE TB_IMPORT_PROCESS_LOGS
    RENAME COLUMN TMP_Message TO MESSAGE;