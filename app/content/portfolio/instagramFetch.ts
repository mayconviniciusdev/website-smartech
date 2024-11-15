export const fetchInstagramFeed = async () => {
  const instagramToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const instagramBusinessAccountId = process.env.NEXT_PUBLIC_INSTAGRAM_BUSINESS_ACCOUNT_ID;

  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${instagramBusinessAccountId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${instagramToken}`);
    
    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(`Erro na API do Instagram: ${error.message}`);
    }

    return (await response.json()).data;
  } 
  
  catch (error) { throw error; }
};