import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"; // Import Link from @mui/material

const LINKS = [
  {
    headline: "Minimal",
    children: [
      { name: "About us", href: "/about" },
      { name: "Contact us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [{ name: "rahulkrprasad18@gmail.com", href: "#" }],
  },
];

export default function Footer() {
  
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#2f2b45",
        clipPath: "polygon(0 0, 100% 17%, 100% 100%, 0% 100%)",
      }}
    >
      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Grid
          container
          justifyContent={{
            xs: "center",
            md: "space-between",
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="body2"
              sx={{
                color: "common.white",
                maxWidth: 270,
                mx: { xs: "auto", md: "unset" },
              }}
            >
              Developed by me for learning purposes in MERN development, the replica of the
              website https://www.myscheme.gov.in/ serves as a valuable project to showcase 
              on my resume.
            </Typography>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: "column", md: "row" }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: "center", md: "flex-start" }}
                  sx={{ width: 1 }}
                >
                  <Typography
                    component="div"
                    variant="overline"
                    color="common.white"
                  >
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      sx={{ color: "white" }} // Apply custom style to change color
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography color="common.white" variant="body2" sx={{ mt: 10 }}>
        © 2024. All rights reserved to https://www.myscheme.gov.in/. This replica 
        has been created for learning purposes only and is not 
        intended for commercial use.
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}
