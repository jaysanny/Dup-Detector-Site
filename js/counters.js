const timeMiliseconds = new Date().getTime()

const spaceSaved = timeMiliseconds / 10000000000
const dupsDetected = spaceSaved + spaceSaved * 12
const totalDownloads = spaceSaved + spaceSaved * 21

$("#spaceSaved").attr("data-to", spaceSaved)
$("#dupsDetected").attr("data-to", dupsDetected)
$("#totalDownloads").attr("data-to", totalDownloads)
