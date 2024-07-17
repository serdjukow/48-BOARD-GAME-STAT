const BASE = "http://r48.kodimgroup.ru/api/v1/game/stat/ "

export async function fetchStatistics() {
  const res = await fetch(`${BASE}`, {
    headers: { "Type-Device": "landing-GH87RG0PO45FSFM" }
  })

  if (!res.ok) throw new Error("Failed to fetch todos!")

  return res.json()
}
