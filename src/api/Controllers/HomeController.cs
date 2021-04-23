using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class HomeController : Controller
    {
        [Route("/")]
        public IActionResult Index ()
            => File(System.IO.Directory.GetCurrentDirectory() + "\\wwwroot\\index.html", "text/html");
    }
}
