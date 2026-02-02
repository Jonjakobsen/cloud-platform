import { useState } from 'react'
import './App.css'

function App() {
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('');
  const [environment, setEnvironment] = useState('Development');
  const [cloudProvider, setCloudProvider] = useState('Azure');
  const [Department, setDepartment] = useState('');
  const [resourceType, setResourceType] = useState('WebApp');
  const [accessLink, setAccessLink] = useState('');

  const handleDeploy = async () => {
    setStatus('Sender anmodning til Cloud API...');
    
    // Her kalder vi din C# API (husk at porten skal matche din dotnet app)
    try {
      const response = await fetch('http://localhost:5140/api/provision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ProjectName: projectName,
          Environment: environment,
          CloudProvider: cloudProvider,
          ResourceType: resourceType,
          Department: Department
        })
      });

      const data = await response.json();
      setStatus(`Svar fra server: ${data.message || 'Miljø bestilt!'}`);
      setAccessLink(data.link);
    } catch (error) {
      setStatus('Fejl: Kunne ikke kontakte API. Husk at køre din .NET app!');
    }
  };

  return (
    <div className="container">
      <h1>Norlys Cloud Portal</h1>
      <div className="card">
        <input 
          type="text" 
          placeholder="Indtast projektnavn..." 
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
          <option value="Development">Development</option>
          <option value="Staging">Staging</option>
          <option value="Production">Production</option>
        </select>


        <select value={cloudProvider} onChange={(e) => setCloudProvider(e.target.value)}>
          <option value="Azure">Azure</option>
          <option value="AWS">AWS</option>
        </select>

        <select value={Department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="IT">IT</option>
          <option value="Data & Analytics">Data & Analytics</option>
        </select>

        <label>Hvad skal du bygge?</label>
        <select value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
          <option value="WebApp">Standard Web App (CPU)</option>
          <option value="MachineLearning">ML Workstation (GPU)</option>
          <option value="Database">SQL Database</option>
        </select>


        <button onClick={handleDeploy}>
          Provisioner
        </button>
      </div>

      {status && <p className="status-box">{status}</p>}

      {accessLink && (
        <div className="access-box">
          <p>Dit miljø er klar her:</p>
          <a href={accessLink} target="_blank" rel="noreferrer">
            Åbn din ressource
          </a>
  </div>
)}
    </div>
  )
}

export default App