export async function fetchAllTools() {
  const endpoint = 'http://localhost:3000/tools';
  const response = fetch(endpoint).then((data) => data.json());
  return response;
}
