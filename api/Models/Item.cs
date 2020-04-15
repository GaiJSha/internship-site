using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Api.Models
{
    [BsonIgnoreExtraElements]
    public class Item : NewItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

    }

    public class NewItem
    {
        public string Name { get; set; }

        public List<TypeDto> Types { get; set; }
    }

    public class NewUtility 
    {
        public string Name { get; set; }

        public  float Price { get; set; }
    }
}