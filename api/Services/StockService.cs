using Api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace Api.Services
{
    public class StockService
    {
        private readonly IMongoCollection<Item> _stock;
        
        public StockService(IMashtelaDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _stock = database.GetCollection<Item>(settings.MashtelaCollectionName);
        }

        public List<Item> Get() =>
            _stock.Find(item => true).ToList();

        public Item Get(string id) =>
                _stock.Find<Item>(item => item.Id == id).FirstOrDefault();

        public Item Create(Item item)
        {
            _stock.InsertOne(item);
            return item;
        }

        public void Update(string id, Item itemInput) =>
            _stock.ReplaceOne(item => item.Id == id, itemInput);

        public void Remove(Item itemInput) =>
            _stock.DeleteOne(item => item.Id == itemInput.Id);

        public void Remove(string id) => 
            _stock.DeleteOne(item => item.Id == id);
    }
}