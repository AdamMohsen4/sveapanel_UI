"use client";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@/App.css";

const theme = createTheme({
  typography: {
    fontFamily:
      "Cereal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          html, body, #__next { height: 100%; background-color:#fff; }
          body, * { font-family: Cereal, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        `,
    },
  },
});

const Paragraph = ({
  children,
  mb = 2,
}: {
  children: React.ReactNode;
  mb?: number;
}) => (
  <Typography
    sx={{
      fontSize: { xs: "0.95rem", md: "1rem" },
      lineHeight: 1.7,
      color: "#374151",
      mb,
    }}
  >
    {children}
  </Typography>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: { xs: 4, md: 5 } }}>
    <Typography
      variant="h5"
      component="h2"
      sx={{
        fontWeight: 700,
        fontSize: { xs: "1.25rem", md: "1.5rem" },
        mb: 2,
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="overline"
    sx={{
      color: "#6b7280",
      fontWeight: 600,
      fontSize: "0.7rem",
      letterSpacing: 1,
      display: "block",
      mb: 0.5,
    }}
  >
    {children}
  </Typography>
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <Box
    component="ul"
    sx={{
      pl: 2.5,
      mb: 2,
      "& li": {
        mb: 0.75,
        fontSize: { xs: "0.9rem", md: "1rem" },
        lineHeight: 1.6,
        color: "#374151",
      },
    }}
  >
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </Box>
);

const PartnerCategoryCard = ({
  title,
  intro,
  partners,
  dataShared,
  purposes,
  notes,
  retention,
}: {
  title: string;
  intro?: string;
  partners?: string[];
  dataShared?: string[];
  purposes?: string[];
  notes?: string[];
  retention?: string;
}) => (
  <Paper
    elevation={0}
    sx={{
      border: "1px solid #e5e7eb",
      borderRadius: 2,
      overflow: "hidden",
      mb: 3,
    }}
  >
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        px: { xs: 2, md: 3 },
        py: 1.5,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", md: "1.05rem" } }}
      >
        {title}
      </Typography>
    </Box>

    <Box sx={{ px: { xs: 2, md: 3 }, py: 2 }}>
      {intro && <Paragraph mb={2}>{intro}</Paragraph>}

      {partners && partners.length > 0 && (
        <>
          <FieldLabel>Partners currently include</FieldLabel>
          <BulletList items={partners} />
        </>
      )}

      {dataShared && dataShared.length > 0 && (
        <>
          <Divider sx={{ my: 1.5 }} />
          <FieldLabel>Categories of data shared</FieldLabel>
          <BulletList items={dataShared} />
        </>
      )}

      {purposes && purposes.length > 0 && (
        <>
          <Divider sx={{ my: 1.5 }} />
          <FieldLabel>Purpose of sharing</FieldLabel>
          <BulletList items={purposes} />
        </>
      )}

      {notes &&
        notes.map((note, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              color: "#6b7280",
              fontStyle: "italic",
              mb: 2,
              pl: 1,
              borderLeft: "2px solid #e5e7eb",
            }}
          >
            {note}
          </Typography>
        ))}
    </Box>

    {retention && (
      <Box
        sx={{
          bgcolor: "#f0fdf4",
          px: { xs: 2, md: 3 },
          py: 1.5,
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", md: "0.85rem" },
            color: "#374151",
          }}
        >
          <strong>Retention:</strong> {retention}
        </Typography>
      </Box>
    )}
  </Paper>
);

const GdprArticle15Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <style>{`
        body { background-color: #fff; }
        html { background-color: #fff !important; }
      `}</style>
      <Container
        maxWidth="md"
        sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 3, md: 5 } }}
      >
        {/* Header */}
        <Box sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              mb: 3,
            }}
          >
            GDPR Article 15 — Right of Access
          </Typography>

          <Paragraph>
            Below you will find information regarding categories of third
            parties with whom SveaPanelen may share personal data in connection
            with the services provided through our platform, including the
            purpose of sharing, categories of data involved, and whether
            processing may occur outside the EU/EEA.
          </Paragraph>

          <Paragraph>
            The information below reflects the third-party partners and service
            providers currently used by SveaPanelen in connection with operation
            of the platform. These may change over time as the platform and
            services evolve.
          </Paragraph>

          <Paragraph>
            Please note that SveaPanelen acts both as an independent data
            controller for operation of the platform and, in some cases, as an
            intermediary connecting users with independent third-party
            providers. Where users participate directly in third-party surveys,
            offers, cashback programs, or gaming experiences, additional data
            may be collected directly by those providers under their own
            privacy policies and processing purposes.
          </Paragraph>
        </Box>

        <Section title="Survey and Market Research Partners">
          <Paragraph>
            SveaPanelen works with survey and market research providers for
            survey matching, eligibility determination, fraud prevention, and
            survey participation.
          </Paragraph>

          <PartnerCategoryCard
            title="Survey and market research providers"
            partners={[
              "Cint AB (Sweden)",
              "Lucid Holdings, LLC / related exchange providers (United States)",
              "P2Sample / related exchange providers (United States)",
              "PureSpectrum Inc. (United States)",
              "CPX Research GmbH (Germany)",
              "Prime Insights Group LLC (United States)",
            ]}
            dataShared={[
              "Internal user identifier",
              "Email address in limited cases",
              "IP address",
              "Country",
              "Age and gender",
              "Voluntarily provided profiling information relevant for survey matching",
            ]}
            purposes={[
              "Survey matching and routing",
              "Fraud prevention",
              "Eligibility determination",
              "Market research participation",
            ]}
            retention="Survey participation data processed directly within third-party survey systems is retained according to the applicable provider's own retention policies and research requirements. Aggregated research results are generally anonymized."
          />
        </Section>

        <Section title="Gaming and Rewarded Offer Partners">
          <Paragraph>
            SveaPanelen works with third-party gaming and rewarded offer
            providers.
          </Paragraph>

          <PartnerCategoryCard
            title="Gaming and rewarded offer providers"
            partners={[
              "adjoe GmbH (Germany)",
              "MyChips / MyFreeApp (United States)",
            ]}
            dataShared={[
              "Internal user identifier",
              "Age and gender",
              "Advertising identifiers (IDFA/GAID where permitted by device settings and applicable consent)",
            ]}
            purposes={[
              "Attribution and reward tracking",
              "Verification of completed game objectives",
              "Fraud prevention",
              "Campaign optimization",
            ]}
            notes={[
              "Gameplay tracking and event verification may occur directly between the game publisher and the offer provider through SDK integrations and attribution systems.",
            ]}
          />
        </Section>

        <Section title="Cashback and Affiliate Partners">
          <Paragraph>
            SveaPanelen provides cashback opportunities through affiliate and
            cashback networks.
          </Paragraph>

          <PartnerCategoryCard
            title="Cashback and affiliate networks"
            partners={[
              "Adtraction Marketing AB (Sweden)",
              "Awin AG (Germany)",
              "impact.com / Impact Tech, Inc. (United States)",
              "Daisycon B.V. (Netherlands)",
              "TradeDoubler AB (Sweden)",
              "CJ Affiliate / Conversant LLC (United States)",
            ]}
            dataShared={[
              "Tracking identifiers",
              "Click identifiers",
              "Attribution information",
              "Purchase metadata necessary for cashback validation",
            ]}
            notes={[
              "SveaPanelen generally does not share direct identifying personal information with cashback merchants. Cashback tracking primarily operates through affiliate tracking technologies and attribution systems managed by affiliate providers.",
            ]}
          />
        </Section>

        <Section title="Analytics, Attribution and Marketing Providers">
          <Paragraph>
            SveaPanelen uses analytics, attribution, and advertising partners
            for app analytics, campaign measurement, fraud prevention, and
            marketing attribution.
          </Paragraph>

          <PartnerCategoryCard
            title="Analytics, attribution and marketing providers"
            partners={[
              "Google Firebase (Google LLC, United States)",
              "Branch Metrics, Inc. (United States)",
              "Meta Platforms, Inc. (United States)",
              "TikTok Technology Limited / related entities",
            ]}
            dataShared={[
              "Internal user identifiers",
              "Device identifiers",
              "Conversion and attribution events",
              "Email address or hashed email in certain integrations",
              "Name, gender, and date of birth in limited attribution contexts",
              "IP address and device information",
            ]}
            notes={[
              "Advertising identifiers such as IDFA/GAID are only processed where permitted by device settings and applicable consent requirements.",
            ]}
          />
        </Section>

        <Section title="Payment Providers">
          <Paragraph>
            SveaPanelen processes payouts using payment providers.
          </Paragraph>

          <PartnerCategoryCard
            title="Payment providers"
            partners={["Swish / Getswish AB (Sweden)"]}
            dataShared={[
              "Phone number",
              "Personal identity number where required for payout verification",
            ]}
            purposes={[
              "Payment execution",
              "Identity verification",
              "Fraud prevention",
              "Compliance with legal and accounting obligations",
            ]}
          />
        </Section>

        <Section title="Communication Providers">
          <Paragraph>
            SveaPanelen uses third-party providers for email and SMS
            communications.
          </Paragraph>

          <PartnerCategoryCard
            title="Communication providers"
            partners={[
              "Twilio Inc. (United States)",
              "ProSMS / Compaya Mobile Solutions",
              "CampaignLark / Maileroo Group Pty Ltd (Australia)",
            ]}
          />
        </Section>

        <Section title="Infrastructure, Security and Fraud Prevention Providers">
          <Paragraph>
            SveaPanelen primarily hosts infrastructure within the EU/EEA using
            Amazon Web Services (AWS).
          </Paragraph>

          <Paragraph>Additional providers may be used for:</Paragraph>

          <BulletList
            items={[
              "Infrastructure security",
              "Bot and fraud prevention",
              "VPN/proxy detection",
              "Geolocation services",
              "Content delivery and DDoS protection",
            ]}
          />

          <Paragraph>
            These providers may process technical identifiers such as IP
            address, device information, and request metadata.
          </Paragraph>
        </Section>

        <Section title="International Transfers">
          <Paragraph>
            Some providers listed above may process personal data outside the
            EU/EEA, including in the United States and other jurisdictions.
            Where applicable, such transfers are carried out subject to
            safeguards implemented by the provider, such as the European
            Commission's Standard Contractual Clauses.
          </Paragraph>
        </Section>

        <Section title="Retention">
          <Paragraph>General retention practices include:</Paragraph>

          <BulletList
            items={[
              "Account data retained while the account remains active",
              "Certain profiling data deleted following prolonged inactivity",
              "Logs generally retained for no longer than one year",
              "Financial and transaction data retained where required by law",
              "Aggregated analytics and research results retained in anonymized or statistical form",
            ]}
          />
        </Section>

        <Paragraph>
          If you would like additional information regarding your specific
          account data or wish to exercise additional rights under GDPR, please
          contact us.
        </Paragraph>
      </Container>
    </ThemeProvider>
  );
};

export default GdprArticle15Page;
