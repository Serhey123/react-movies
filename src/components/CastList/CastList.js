import styles from './CastList.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/fetchService';
import { imagePicker } from '../../utils/imagePicker';

import { Oval } from 'react-loader-spinner';

import { Alert, AlertTitle } from '@mui/material';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function CastList({ id }) {
  const [actors, setActors] = useState(null);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('pending');
    fetchMovieCast(id).then(res => {
      if (res.cast.length === 0) {
        setStatus('error');
        return;
      }
      setActors(res);
      setStatus('resolved');
    });
  }, []);

  if (status === 'resolved') {
    return (
      <>
        <ul className={styles.list}>
          {actors.cast.map(actr => (
            <li key={actr.character + actr.id} className={styles.list__item}>
              <Card className={styles.card}>
                <CardMedia
                  className={styles.img}
                  image={imagePicker(actr.profile_path)}
                  title={`${actr.name}`}
                />
                <CardContent className={styles.content}>
                  <Typography gutterBottom variant="p" component="p">
                    {actr.name}
                  </Typography>
                  {actr.character && (
                    <Typography gutterBottom variant="p" component="p">
                      ({actr.character})
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <Oval
        height={50}
        width={50}
        color="#000"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        secondaryColor="#f0"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    );
  }

  if (status === 'error') {
    return (
      <Alert severity="error">
        <AlertTitle>Sorry</AlertTitle>
        Nothing found :(
      </Alert>
    );
  }
}
