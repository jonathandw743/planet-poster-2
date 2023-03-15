migrate((db) => {
  const collection = new Collection({
    "id": "lb7ijfaurl7m6n1",
    "created": "2023-02-20 11:11:06.160Z",
    "updated": "2023-02-20 11:11:06.160Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u1ce37tg",
        "name": "nickname",
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
        "id": "f29qzbp9",
        "name": "session",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "i3va2a7nlyne648",
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
  const collection = dao.findCollectionByNameOrId("lb7ijfaurl7m6n1");

  return dao.deleteCollection(collection);
})
