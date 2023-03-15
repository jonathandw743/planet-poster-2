migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5l8exa6joev6ax")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hglhtdwp",
    "name": "question",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "mmr6whpp7gbjyhl",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5l8exa6joev6ax")

  // remove
  collection.schema.removeField("hglhtdwp")

  return dao.saveCollection(collection)
})
