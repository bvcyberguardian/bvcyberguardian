/**
 * BV CyberGuardian — Newsletter Signup Webhook
 *
 * SETUP:
 * 1. Create a new Google Sheet (e.g. "Newsletter Subscribers").
 * 2. In the sheet, add a header row: Email | Subscribed At | Source
 * 3. Extensions menu -> Apps Script.
 * 4. Delete any boilerplate code and paste this file's contents in.
 * 5. Click Deploy -> New deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy, authorize the script when prompted.
 * 7. Copy the Web app URL it gives you.
 * 8. Set it as NEWSLETTER_WEBHOOK_URL in the Next.js project's .env.local
 *
 * If you ever change the deployment, you must "Manage deployments" ->
 * edit -> redeploy to get a stable URL, or create a new deployment and
 * update the env var.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var email = (data.email || "").toString().trim();

    if (!email || email.indexOf("@") === -1) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "Invalid email" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Avoid duplicate signups
    var existing = sheet.getRange("A2:A").getValues().flat();
    if (existing.indexOf(email) !== -1) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: true, duplicate: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([email, new Date(), data.source || "website"]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
