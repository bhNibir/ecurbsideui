import { useMutation } from '@apollo/client';
import { Box, Card, Container, CssBaseline, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import VerifyErrorMessage from '../../components/Messages/VerifyErrorMessage';
import VerifySuccessMessage from '../../components/Messages/VerifySuccessMessage';
import { VERIFY_ACCOUNT } from '../../gql/gql';

const VerifyAccountPage = () => {
    const { token } = useParams();
    const [verifyAccount, { data }] = useMutation(VERIFY_ACCOUNT);

    useEffect(() => {
        verifyAccount({ variables: { token } });
    }, [token, verifyAccount]);

    return (
        <>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: '80vh' }}
            >
                <Container maxWidth="sm">
                    <Box>
                        <Card
                            align="center"
                            sx={{
                                m: 2,
                                p: 1,
                            }}
                        >
                            {data?.verifyAccount?.success && (
                                <>
                                    <VerifySuccessMessage />
                                </>
                            )}
                            {data?.verifyAccount?.errors?.nonFieldErrors?.map(({ message }) => (
                                <>
                                    <VerifyErrorMessage message={message} />
                                </>
                            ))}
                        </Card>
                    </Box>
                </Container>
            </Grid>
            <Footer />
        </>
    );
};

export default VerifyAccountPage;
