export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const userKey = req.headers['x-api-key'];
    const HF_PRIVATE_URL = "https://your-username-bella-ai.hf.space/chat"; // Update this!

    try {
        const response = await fetch(HF_PRIVATE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": userKey
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to connect to AI Brain" });
    }
}

