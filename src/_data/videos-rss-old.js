const Parser = require("fast-xml-parser");

module.exports = async function () {
  const response = await fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC9KuKnzAuVFbfd8W3kKzO1g"
  );

  const xml = await response.text();

  const parser = new Parser.XMLParser();
  const data = parser.parse(xml);

  return data.feed.entry || [];
};