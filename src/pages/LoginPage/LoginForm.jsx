// import { gql, useMutation } from '@apollo/client';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

// const GET_AUTH_TOKEN = gql`
//     mutation getToken($email: String, $username: String, $password: String!) {
//         tokenAuth(email: $email, username: $username, password: $password) {
//             success
//             errors
//             token
//             refreshToken
//         }
//     }
// `;

const LoginForm = ({ onSubmitData }) => {
    const { control, handleSubmit } = useForm();

    // const [tokenAuth, { data, loading: mutationLoading, error: mutationError }] = useMutation(
    //     GET_AUTH_TOKEN,
    //     {
    //         onCompleted(result) {
    //             console.log('Token Data', result.tokenAuth.token);
    //             if (result?.tokenAuth?.token) {
    //                 window.localStorage.setItem('token', result?.tokenAuth?.token);

    //                 const { from } = location.state || { from: { pathname: '/' } };
    //                 history.replace(from);
    //                 console.log('from:', from);
    //             } else {
    //                 // eslint-disable-next-line no-alert
    //                 alert('Something is Wrong! Try Agan!!');
    //             }
    //         },
    //     }
    // );

    // if (mutationLoading) return <Loading />;
    // if (mutationError) return <Errors message={data.register.errors} />;

    return (
        <>
            <div>
                <form noValidate onSubmit={handleSubmit(onSubmitData)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                margin="dense"
                                size="small"
                                fullWidth
                                id="email"
                                label="Email address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="email"
                            />
                        )}
                        rules={{ required: 'Email required' }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                margin="dense"
                                size="small"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'Password required' }}
                    />
                    {/* {mutationLoading && <LinearProgress />} */}
                    <Box my={1}>
                        <Button
                            type="submit"
                            size="medium"
                            fullWidth
                            color="primary"
                            variant="contained"
                            disableElevation
                        >
                            Login
                        </Button>
                    </Box>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
