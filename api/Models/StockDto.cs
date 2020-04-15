using System;
using System.Collections.Generic;

namespace Api.Models
{
    class StockDto
    {
        public DateTime LastUpdate { get; set; }

        public List<Item> Items { get; set; }
    }
}