ALTER TABLE items DROP COLUMN itemHandlerBeanName;
ALTER TABLE items DROP COLUMN parentItemType;
ALTER TABLE items MODIFY COLUMN createdTimestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE property_definition MODIFY internalValue VARCHAR(2000);
ALTER TABLE user_property_definition MODIFY internalValue VARCHAR(2000);
DROP VIEW name_value_pairs;