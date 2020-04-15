using System.Linq;
using System.Collections.Generic;
using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/stock")]
    public class StockController : ControllerBase
    {
        private readonly StockService _stock;
        public StockController(StockService stock)
        {
            _stock = stock;
        }

        [HttpGet()]
        public ActionResult<List<ItemDto>> GetStock()
        {
            List<Item> stock = _stock.Get();
            List<ItemDto> ret = stock.ConvertAll((item) => new ItemDto(item));
            return Ok(ret);
        }

        [HttpGet("{itemId}")]
        public ActionResult<ItemDto> GetItem(string itemId)
        {
            Item item = _stock.Get(itemId);
            if (item == null)
            {
                return NotFound();
            }
            ItemDto ret = new ItemDto(item);
            return Ok(ret);
        }

        [HttpPost]
        
        public ActionResult<ItemDto> CreateItem([FromBody] NewItem item){
            Item ret = _stock.Create(new Item(){Name = item.Name, Types = item.Types});
            return Ok(ret);
        }

        [HttpPost("plant")]
        
        public ActionResult<ItemDto> CreatePlant([FromBody] string name){


            Item ret = _stock.Create(new Item(){Name = name, Types = TypeProvider.SummerPlantType});
            return Ok(ret);
        }

        [HttpPost("utility")]
        
        public ActionResult<ItemDto> CreateUtility([FromBody] NewUtility utility){
            Item ret = _stock.Create(new Item(){Name = utility.Name, Types = TypeProvider.UtilityType(utility.Price) });
            return Ok(ret);
        }

    }
}