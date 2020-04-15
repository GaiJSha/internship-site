using System.Collections.Generic;
using MongoDB.Bson;

namespace Api.Models
{
    public class ItemDto
    {
        public ItemDto(Item item)
        {
            Id = item.Id.ToString();
            Name =  item.Name;
            Types = item.Types;
        }
        public string Id { get; set; }

        public string Name { get; set; }

        public List<TypeDto> Types { get; set; }
    }
}