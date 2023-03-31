import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.livemint.com%2Fimg%2F2022%2F10%2F15%2F1600x900%2Fcn_1665842546461_1665842559763_1665842559763_1665844048619_1665844264086_1665844264086.webp&tbnid=-oD-dbgBaHDVhM&vet=12ahUKEwjf-4rEwIH-AhUc8nMBHUbLAvoQMyhCegUIARCHAQ..i&imgrefurl=https%3A%2F%2Fwww.livemint.com%2Fnews%2Fworld%2Fwere-not-dead-cartoon-network-posts-after-nostalgic-memes-become-viral-11665843963016.html&docid=U-1KVDm25KLFrM&w=1599&h=900&q=cartoons%20images&ved=2ahUKEwjf-4rEwIH-AhUc8nMBHUbLAvoQMyhCegUIARCHAQ',
    title: 'Cartoons',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flh3.googleusercontent.com%2F-x6YVKYvEGvo%2FYaipRyFjRPI%2FAAAAAAAAADo%2F46zMBZdaiIkUHUqtmfloFB7u_VX7eI2HgCNcBGAsYHQ%2FMotivational%252BStatus.png&tbnid=oLKttTnyfSBI1M&vet=12ahUKEwis1KacwYH-AhWqgGMGHSakBcsQMygPegUIARDcAQ..i&imgrefurl=https%3A%2F%2Fwww.pagalmp3status.com%2Fwhatsapp-status%2Fmotivational-whatsapp-status-video-download%2F&docid=SbgevUa0oYaxNM&w=512&h=512&q=mptivational%20speeches%20images%20download&ved=2ahUKEwis1KacwYH-AhWqgGMGHSakBcsQMygPegUIARDcAQ',
    title: 'Motivational Speeches',
    
  },
  {
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20211217%2Foriginal%2Fpngtree-note-music-logo-watercolor-background-picture-image_1589075.jpg&tbnid=mxHmgMvxMo6F7M&vet=12ahUKEwitouq_wYH-AhXR83MBHe3lCGkQMygFegUIARDrAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-music-background&docid=jQ7fN6p39ccMiM&w=1200&h=857&q=music%20images&ved=2ahUKEwitouq_wYH-AhXR83MBHe3lCGkQMygFegUIARDrAQ',
    title: 'Music',
    
  },
  {
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frukminim1.flixcart.com%2Fimage%2F850%2F850%2Fksez24w0%2Fsticker%2Fe%2Fs%2Fn%2Fbeautiful-dancing-girl-sticker-for-multicolor-large-91-rk31-original-imag5zfuhyhxhg7p.jpeg%3Fq%3D90&tbnid=VY7mCdfuirbv3M&vet=10CIIBEDMomgFqFwoTCOCNldzCgf4CFQAAAAAdAAAAABAD..i&imgrefurl=https%3A%2F%2Fwww.shopsy.in%2Fnirmal-dcor-beautiful-dancing-girl-sticker-multicolor-large-wall%2Fp%2Fitm192e4782dc934&docid=dhrJNt9gjzTueM&w=850&h=850&q=beautiful%20dancing%20girl%20images&hl=en&ved=0CIIBEDMomgFqFwoTCOCNldzCgf4CFQAAAAAdAAAAABAD',
    title: 'Dance',
    
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  
    cols: 2,
  },
];