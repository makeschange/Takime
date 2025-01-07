import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("Request URL:", req.url);
    if (!req.url)
      return res.status(400).json({ error: "Invalid request: URL not Found!" });

    const apiUrl = `https://api.jikan.moe${req.url.replace("/api/proxy", "")}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch data from API" });
    }
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
}
