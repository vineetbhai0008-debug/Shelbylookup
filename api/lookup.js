export default async function handler(req, res) {
  const { type, value } = req.query;

  if (!value) {
    return res.status(400).send("No input");
  }

  try {
    let url;

    if (type === "phone") {
      url = `https://ayaanmods.site/number.php?key=annonymous&number=${value}`;
    } else {
      url = `https://vehicle-info-aco-api.vercel.app/info?vehicle=${value}`;
    }

    const response = await fetch(url);
    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);

  } catch (err) {
    res.status(500).send("API ERROR");
  }
}
