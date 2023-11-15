import {
  Container,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import OpeningPoster from "../../../public/events/ktl-opening.png";

export default function Events() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack
            direction="column"
            sx={{
              alignItems: "center",
            }}
          >
            <Image src={OpeningPoster} alt="Grand opening" style={{
              maxWidth: "100vw",
              maxHeight: "100vh",
              objectFit: "contain",
            }} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}