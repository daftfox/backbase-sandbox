
IF (OBJECT_ID('FK_mhp750onsg14deqsc5mkp4dx', 'F') IS NOT NULL)
BEGIN
  ALTER TABLE OBJECT_DATA DROP CONSTRAINT FK_mhp750onsg14deqsc5mkp4dx;
END
GO

IF (OBJECT_ID('FK_i6hwfpq7ppvktiim2thpqxiac', 'F') IS NOT NULL)
BEGIN
  ALTER TABLE OBJECT_DATA DROP CONSTRAINT FK_i6hwfpq7ppvktiim2thpqxiac;
END
GO

IF (OBJECT_ID('FK_r5pfq0qmo565nb85q01q6r5og', 'F') IS NOT NULL)
BEGIN
  ALTER TABLE PROPERTY_DATA DROP CONSTRAINT FK_r5pfq0qmo565nb85q01q6r5og;
END
GO

IF (OBJECT_ID('FK_cwor9qcw8nm14qawhqtatfhbc', 'F') IS NOT NULL)
BEGIN
  ALTER TABLE RELATIONSHIPS DROP CONSTRAINT FK_cwor9qcw8nm14qawhqtatfhbc;
END
GO

IF (OBJECT_ID('FK_aw8vtq9lh7ehwfu0oc30q0hqn', 'F') IS NOT NULL)
BEGIN
  ALTER TABLE RENDITION DROP CONSTRAINT FK_aw8vtq9lh7ehwfu0oc30q0hqn;
END
GO

IF (OBJECT_ID('FK_l7rl4ulhh823p0t9oswg761c9', 'F') IS NOT NULL)
BEGIN
  ALTER TABLE RENDITION DROP CONSTRAINT FK_l7rl4ulhh823p0t9oswg761c9;
END
GO

IF OBJECT_ID('CONTENT_STREAM', 'U') IS NOT NULL
BEGIN
  DROP TABLE CONTENT_STREAM;
END
GO

IF OBJECT_ID('OBJECT_DATA', 'U') IS NOT NULL
BEGIN
  DROP TABLE OBJECT_DATA;
END
GO

IF OBJECT_ID('PROPERTY_DATA', 'U') IS NOT NULL
BEGIN
  DROP TABLE PROPERTY_DATA;
END
GO

IF OBJECT_ID('RELATIONSHIPS', 'U') IS NOT NULL
BEGIN
  DROP TABLE RELATIONSHIPS;
END
GO

IF OBJECT_ID('RENDITION', 'U') IS NOT NULL
BEGIN
  DROP TABLE RENDITION;
END
GO

IF OBJECT_ID('REPOSITORY_DEFINITION', 'U') IS NOT NULL
BEGIN
  DROP TABLE REPOSITORY_DEFINITION;
END
GO

IF OBJECT_ID('LAST_PUBLICATION_DATE', 'U') IS NOT NULL
BEGIN
  DROP TABLE LAST_PUBLICATION_DATE;
END
GO

IF OBJECT_ID('CANCEL_IMPORT', 'U') IS NOT NULL
BEGIN
  DROP TABLE CANCEL_IMPORT;
END
GO
