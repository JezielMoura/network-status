  
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http;
using System.Net.NetworkInformation;

WebHost.CreateDefaultBuilder()
    .UseWebRoot(System.AppDomain.CurrentDomain.BaseDirectory)
    .ConfigureServices(services => 
    {
        services.AddControllersWithViews().AddJsonOptions(options 
            => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles );

        services.AddCors(c => {
            c.AddPolicy("AllowAll", p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
        });
            
        services.AddSwaggerGen(c 
            => c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mobnet SoftCloud API", Version = "1.0.0" }));
    })
    .Configure(app => 
    {
        var env = app.ApplicationServices.GetRequiredService<IWebHostEnvironment>();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c 
                => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mobnet SoftCloud API 1.0.0"));
        }

        app.UseCors("AllowAll");
        app.UseStaticFiles();
        app.UseRouting();
        app.UseEndpoints(endpoints => { 
            endpoints.MapDefaultControllerRoute();
            endpoints.MapGet("/api/{ip}", async http => { 
                var ip = http.Request.RouteValues["ip"] as string;
                var ping = new Ping().Send(ip, 5000);
                await http.Response.WriteAsync((ping.Status == IPStatus.Success).ToString());
            });
        });
    })
    .UseUrls("http://*:5000").Build().Run();