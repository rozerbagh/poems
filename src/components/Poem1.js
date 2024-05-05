import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import banner from "../img/banner.jpeg"
function Poem1() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom color={"blueviolet"}>
            LIFE's TRUE INITIMACY.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={banner} alt="banner" height={400} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="overline" gutterBottom>
            People think that intimacy is about sleeping together. But it's not.
          </Typography>
          <br />
          <br />
          <Typography variant="overline" gutterBottom>
            True intimacy goes far beyond the physical. It's about sharing your
            deepest fears insecurities and vulnerabilities with someone who
            embraces us without judgement. Someone who holds our your heart
            gently in their hands.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="overline" margin={"normal"}>
            Real intimacy is when you can open up your innermost thoughts your
            pain and your trauma to another person knowing that they will listen
            with empathy and understanding. It's when you can reveal the broken
            pieces of your souland they respond with kindness and love.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="overline" gutterBottom>
            Intimacy is when you find A Safe HEAVEN in some presence. A place
            where you can be your authentic self without fear of rejection. It's
            where you can stand infront of them stripped of pretenses and they
            reassure you with those magical words you are Safe with me. In a
            world where masks are often worn.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h6" gutterBottom>
            TRUE INITIMACY IS A RARE GEM.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="overline" gutterBottom>
            It's a connection that transcends physical Attraction and Delves
            Deep into the essence of our humanity. It's a bond that says, I see
            you for who are and I love ypu unconditionaly.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="h5" gutterBottom>
            So cherish those who offer you real intimacy. For they are the ones
            who will stand by your side through the LIFE's HIGH and LOWS.
            Reminding you that your are and never Alone on this beautiful and
            sometimes challenging journey.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Poem1