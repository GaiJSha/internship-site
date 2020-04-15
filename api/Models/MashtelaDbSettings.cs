namespace Api.Models
{
    public class MashtelaDatabaseSettings : IMashtelaDatabaseSettings
    {
        public string MashtelaCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IMashtelaDatabaseSettings
    {
        string MashtelaCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}