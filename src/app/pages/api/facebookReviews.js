export default async function handler(req, res) {
  try {
    const PAGE_ID = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
    const ACCESS_TOKEN = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

    if (!PAGE_ID || !ACCESS_TOKEN) {
      return res.status(500).json({ error: "Faltan credenciales en .env.local" });
    }

    const fbResponse = await fetch(
      `https://graph.facebook.com/v22.0/${PAGE_ID}/reviews?access_token=${ACCESS_TOKEN}`
    );

    if (!fbResponse.ok) {
      const errorText = await fbResponse.text();
      return res.status(fbResponse.status).json({ error: errorText });
    }

    const text = await fbResponse.text(); // Captura la respuesta como texto

    try {
      const data = JSON.parse(text); // Intenta parsear como JSON

      if (data.error) {
        return res.status(500).json({ error: data.error.message });
      }

      res.status(200).json(data.data);
    } catch (jsonError) {
      console.error("Respuesta no es JSON:", text);
      res.status(500).json({ error: "Respuesta inválida de Facebook", response: text });
    }
  } catch (error) {
    console.error("Error al obtener las reseñas de Facebook:", error);
    res.status(500).json({ error: "Error obteniendo las reseñas de Facebook" });
  }
}
