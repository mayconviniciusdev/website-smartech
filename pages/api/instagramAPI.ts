import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const instagramToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const instagramBusinessAccountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  try {
    const response = await fetch(`https://graph.facebook.com/v21.0/${instagramBusinessAccountId}/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${instagramToken}`);
    
    if (!response.ok) {
      const { error } = await response.json();
      return res.status(500).json({ error: error.message });
    }

    const data = await response.json();
    return res.status(200).json(data.data);
  } 
  
  catch (error: any) {
    return res.status(500).json({ error: error.message || 'Erro desconhecido' });
  }
};