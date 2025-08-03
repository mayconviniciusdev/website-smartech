/** app/utils/fechInstagram.ts **/
export const fetchInstagram = async () => {
  const response = await fetch('/api/instagramAPI.php');
  if (!response.ok) {
    throw new Error('Erro ao buscar feed do Instagram');
  }
  return response.json();
};