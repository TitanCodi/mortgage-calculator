export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        lineHeight: "1.7",
        fontSize: "16px"
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Privacy Policy</h1>

      <p>
        RateCalcNow ("we", "our", or "us") respects your privacy. This privacy
        policy explains how information is handled when you use this website.
      </p>

      <h2 style={{ marginTop: "30px" }}>Information We Collect</h2>

      <p>
        This website does not collect personally identifiable information
        directly. However, third-party services used on this site may collect
        certain anonymous usage data.
      </p>

      <h2 style={{ marginTop: "30px" }}>Cookies</h2>

<p>
  This website may use cookies to improve user experience. Cookies are
  small files stored on your device that help analyze web traffic and
  remember certain user preferences.
</p>

<p>
  By using this website, you consent to the use of cookies in accordance
  with this privacy policy.
</p>

      <h2 style={{ marginTop: "30px" }}>Advertising</h2>

      <p>
        We use Google AdSense to display advertisements. Google may use cookies
        or web beacons to serve ads based on your previous visits to this
        website or other websites.
      </p>

      <p>
        Third-party vendors, including Google, use cookies to serve ads based
        on a user's prior visits to this website or other websites.
      </p>

      <p>
        Google's use of advertising cookies enables it and its partners to
        serve ads to users based on their visit to this site and other sites on
        the internet.
      </p>

      <p>
        Users may opt out of personalized advertising by visiting the
        Google Ads Settings page.
      </p>

      <h2 style={{ marginTop: "30px" }}>Third-Party Services</h2>

      <p>
        This website may use third-party services such as Google Analytics and
        Google AdSense to analyze traffic and display advertisements. These
        services may collect anonymized usage data in accordance with their
        own privacy policies.
      </p>

      <h2 style={{ marginTop: "30px" }}>Changes to This Policy</h2>

      <p>
        We may update this privacy policy from time to time. Any updates will be
        posted on this page.
      </p>

      <h2 style={{ marginTop: "30px" }}>Contact</h2>

      <p>
        If you have questions about this privacy policy, please contact us
        through the contact page on this website.
      </p>

      <p style={{ marginTop: "40px", color: "#666", fontSize: "14px" }}>
        Last updated: {new Date().getFullYear()}
      </p>
    </main>
  )
}