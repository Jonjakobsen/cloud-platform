var builder = WebApplication.CreateBuilder(args);

// --- 1. Konfigurer CORS ---
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            
            policy.WithOrigins("http://localhost:5173") 
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseCors("AllowReactApp");

app.UseSwagger();
app.UseSwaggerUI();

app.MapPost("/api/provision", async (ProvisionRequest request) => {
    Console.WriteLine($"[Cloud API] Bestilling fra afdeling: {request.Department}");
    Console.WriteLine($"[Cloud API] Modtog bestilling: {request.ResourceType} til {request.ProjectName}");
    
    await Task.Delay(1500); 

    
    string responseMessage;
    string accessLink;

    if (request.ResourceType == "MachineLearning") {
        responseMessage = $"Success! Din ML-node med 2x NVIDIA GPU er klar i {request.Environment}.";
        accessLink = "vscode://vscode.remote-hosting/ml-cluster-77";
    } 
    else if (request.ResourceType == "Database") {
        responseMessage = $"Success! SQL-databasen er oprettet i {request.Environment}.";
        accessLink = "jdbc:sqlserver://norlys-db-server.database.windows.net";
    }
    else {
        responseMessage = $"Success! Web Appen {request.ProjectName} er deployet til {request.CloudProvider}.";
        accessLink = $"https://{request.ProjectName.ToLower()}.norlys.dk";
    }

    return Results.Ok(new { 
        message = responseMessage,
        link = accessLink,
        status = "Active"
    });
});

app.Run();

public record ProvisionRequest(string ProjectName, string Environment, string CloudProvider, string ResourceType, string Department);