using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HetRaster.Api.Controllers
{
    [Route("api/HetRaster")]
    [ApiController]
    public class HetRaster : ControllerBase
    {
        public ActionResult Get()
        {
            return Ok(new { message = "backend werkt", time = DateTime.Now });
        }
    }
}
