const BASE_URL = 'https://my-json-server.typicode.com/tractian/fake-api';

export async function fetchApi(path: string) {
  const res = await fetch(`${BASE_URL}/${path}`);

  if (!res.ok) throw new Error('Fetch API not okay');

  return res.json();
};
