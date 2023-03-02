using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAPI.Models
{
    public class FoodItem
    {
        [Key]
        public int FoodItemId { get; set; }

        public string FoodItemName { get; set; }

        public decimal Price { get; set; }
    }
}
