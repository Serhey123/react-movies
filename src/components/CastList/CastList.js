import styles from './CastList.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/fetchService';
import { imagePicker } from '../../utils/imagePicker';
import Loader from 'components/Loader/Loader';
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
      if (res.length === 0) {
        setStatus('error');
        return;
      }
      setActors(res);
      setStatus('resolved');
    });
  }, [id]);

  if (status === 'resolved') {
    return (
      <>
        <ul className={styles.list}>
          {actors.map(actr => (
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
    return <Loader />;
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
