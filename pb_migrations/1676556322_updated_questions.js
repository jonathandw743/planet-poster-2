migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mmr6whpp7gbjyhl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oklgsyke",
    "name": "options",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mmr6whpp7gbjyhl")

  // remove
  collection.schema.removeField("oklgsyke")

  return dao.saveCollection(collection)
})
