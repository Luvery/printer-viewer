using Microsoft.AspNetCore.Mvc;

namespace printers_api.Features.Authorization;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpGet]
    public IActionResult Index()
    {
        return Ok("test");
    }
}