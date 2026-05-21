using Microsoft.AspNetCore.Mvc;

namespace Rentixo.api.presentations.Controllers
{
    public class CarSectionsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
