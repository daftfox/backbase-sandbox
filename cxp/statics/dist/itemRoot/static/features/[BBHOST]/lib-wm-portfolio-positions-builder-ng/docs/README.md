# undefined


Version: **1.15.2**


## Table of Contents    <a href="#createKey">createKey(fields, item)</a><br/>    <a href="#groupListByFields">groupListByFields(list, fields)</a><br/>    <a href="#createHierarchy">createHierarchy(query)</a><br/>

---

### <a name="createKey"></a>*createKey(fields, item)*

Creates entity's unique key

| Parameter | Type | Description |
| :-- | :-- | :-- |
| fields | Array | List of fields to form composite key |
| item | Object | Entity, that will be grouped |

##### Returns

String - *Composite key*

---

### <a name="groupListByFields"></a>*groupListByFields(list, fields)*

Groups entities by composite key

| Parameter | Type | Description |
| :-- | :-- | :-- |
| list | Array | List of entities to be grouped |
| fields | Array | List of fields to form composite key |

##### Returns

Object - *Entities grouped by fields*

---

### <a name="createHierarchy"></a>*createHierarchy(query)*

Creates nested hierarchy out of connected entities

| Parameter | Type | Description |
| :-- | :-- | :-- |
| query | Object | Structure, that describes how to nest entities |

##### Returns

Array - *Hierarchy of nested entities*
