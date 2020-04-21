using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Api
{
    public class Startup
    {
        private string _cors = "c12ors";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.Configure<MashtelaDatabaseSettings>(
                Configuration.GetSection(nameof(MashtelaDatabaseSettings)));
            services.AddCors(options =>
            {
                options.AddPolicy(name: _cors, builder =>
                 {
                     builder.WithOrigins("http://localhost:3000")
                     .AllowAnyHeader()
                     .SetIsOriginAllowedToAllowWildcardSubdomains();
                 });
            });

            services.AddSingleton<IMashtelaDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<MashtelaDatabaseSettings>>().Value);

            services.AddSingleton<StockService>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.Use(middleware);


            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(_cors);
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private RequestDelegate middleware(RequestDelegate next)
        {
            return async (ctx) =>
            {
                string a = Configuration.GetValue<string>("MongoConnectionString");

                await ctx.Response.WriteAsync(a);
            };
        }
    }
}
