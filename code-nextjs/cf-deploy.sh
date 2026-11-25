#!/bin/zsh
# Build and deploy to the Cloudflare Worker "snsacademy-tutors".
# Files over 25 MiB live in R2 (snsacademy-media) and are left out of the asset upload.
set -euo pipefail
cd "$(dirname "$0")"
npx opennextjs-cloudflare build
mv .open-next/assets/images/testimonial/IMG_3319.mp4 .open-next/IMG_3319.mp4.r2-served
npx opennextjs-cloudflare deploy
