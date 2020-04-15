using System.Collections.Generic;

namespace Api.Models
{
    public static class TypeProvider
    {
        static public List<TypeDto> SummerPlantType => new List<TypeDto>{
            new TypeDto(){Name =  "כוסית", Price = 3.5f },
            new TypeDto(){Name =  "פלאג", Price = 2.5f },
            new TypeDto(){Name =  "הנבטה", Price = 0f },
        };

        static public List<TypeDto> WinterPlantType => new List<TypeDto>{
            new TypeDto(){Name =  "כוסית", Price = 2.5f },
            new TypeDto(){Name =  "פלאג", Price = 1.5f },
            new TypeDto(){Name =  "הנבטה", Price = 0f },
        };

        public static List<TypeDto> UtilityType(float price) =>
            new List<TypeDto>{new TypeDto(){Name =  "כללי" , Price = price}};
            
    }
}