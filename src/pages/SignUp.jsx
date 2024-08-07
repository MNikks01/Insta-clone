import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dB, { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignUp({ setshowPage }) {

    const [regSuccess, setregSuccess] = useState(false)
    const [regError, setregError] = useState('')
    const [regFName, setregFName] = useState('')
    const [regLName, setregLName] = useState('')
    const [regEmail, setregEmail] = useState('')
    const [regPwd, setregPwd] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, regEmail, regPwd)
            .then((userCredentials) => {

                setDoc(doc(dB, "USERS", userCredentials.user.uid), {
                    USER_FNAME: regFName,
                    USER_LNAME: regLName,
                    USER_EMAIL: regEmail,
                    USER_PWD: regPwd
                }).then(() => {
                    setregSuccess(true)
                }).catch(err => {
                    setregError(err.message)
                })
            })
            .catch(err => {
                setregError(err.message)
            })
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={regFName}
                                    onChange={e => setregFName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={regLName}
                                    onChange={e => setregLName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={regEmail}
                                    onChange={e => setregEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={regPwd}
                                    onChange={e => setregPwd(e.target.value)}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <h1 style={{ color: 'red' }}>{regError}</h1>
                        {
                            regSuccess &&
                            <h1 style={{ color: 'green' }}>user account created successfully</h1>
                        }
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={() => setshowPage('signin')}>
                                    Already have an account? Sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}