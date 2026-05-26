using Rentixo.api.applications.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Rentixo.api.infrastructure.Repositories
{
    public class CarSectionsService : ICarSections
    {
        public async Task<string> AddCar()
        {
            return "Car Added";
        }
    }
}
