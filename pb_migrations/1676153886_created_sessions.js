migrate((db) => {
  const collection = new Collection({
    "id": "i3va2a7nlyne648",
    "created": "2023-02-11 22:18:06.853Z",
    "updated": "2023-02-11 22:18:06.853Z",
    "name": "sessions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gboaksua",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i3va2a7nlyne648");

  return dao.deleteCollection(collection);
})
