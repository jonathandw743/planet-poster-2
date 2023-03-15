migrate((db) => {
  const collection = new Collection({
    "id": "l5l8exa6joev6ax",
    "created": "2023-02-25 17:38:48.397Z",
    "updated": "2023-02-25 17:38:48.397Z",
    "name": "answers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bgcedtbl",
        "name": "answer",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rkr95oqn",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "lb7ijfaurl7m6n1",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l5l8exa6joev6ax");

  return dao.deleteCollection(collection);
})
