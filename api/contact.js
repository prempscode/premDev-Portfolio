/* eslint-disable no-undef */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/prempscode/ask-me/issues",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `Message from ${name}`,
          body: `**From:** ${name} (${email || "no email given"})\n\n${message}`,
          labels: ["contact"],
        }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("GitHub API error:", errText);
      return res.status(502).json({ error: "Failed to create issue" });
    }

    const issue = await response.json();
    return res.status(200).json({ url: issue.html_url });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
