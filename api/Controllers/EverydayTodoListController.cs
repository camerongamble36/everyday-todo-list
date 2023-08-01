using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class EverydayTodoListController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<EverydayTodoListController> _logger;

    public EverydayTodoListController(ILogger<EverydayTodoListController> logger)
    {
        _logger = logger;
    }

    [HttpGet()]
    public IEnumerable<string> Get()
    {
        return Summaries.ToList();
    }
}
