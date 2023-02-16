migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mmr6whpp7gbjyhl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlibkmao",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mmr6whpp7gbjyhl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlibkmao",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "i3va2a7nlyne648",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
