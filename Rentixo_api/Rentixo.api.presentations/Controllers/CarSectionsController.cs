using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Rentixo.api.presentations.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarSectionsController : ControllerBase
    {
        private readonly ICarSections _carSections;

        public CarSectionsController(
            ICarSections carSections)
        {
            _carSections = carSections;
        }

        [HttpGet]
        public async Task<IActionResult> AddCar()
        {
            var result = await _carSections.AddCar();

            return Ok(result);
        }
    }
}
