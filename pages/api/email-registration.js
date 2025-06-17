import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return res.status(404).json({
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;
    const event = allEvents.find((e) => e.id === eventId);
    if (event.emails_registered?.includes(email)) {
      return res.status(409).json({ message: "Email already registered" });
    }
    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
      return event;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    res.status(200).json({
      message: `You have been registered succesfully with email: ${email} to ${eventId}`,
    });
  }
  if (method === "GET") {
    res.status(200).json({ status: "Exzel greatnes is loading" });
  }
}
