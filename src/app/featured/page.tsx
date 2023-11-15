"use client";

import FeaturedToys from "./data.json";
import { useEffect, useMemo, useState } from "react";
import {
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

export default function Featured() {
  const [featuredToyIndex, setFeaturedToyIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 5;
        if (newProgress >= 100) {
          setFeaturedToyIndex(() => {
            return Math.floor(Math.random() * FeaturedToys.length);
          });
          return 0;
        }
        return newProgress;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { title, image, ages } = useMemo(() => {
    return FeaturedToys[featuredToyIndex];
  }, [featuredToyIndex]);

  return (
    <>
      <LinearProgress variant="determinate" value={progress} />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack
              direction="column"
              sx={{
                alignItems: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={title}
                title={title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">Featured Toy</Typography>
            <Typography variant="h1">{title}</Typography>
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
